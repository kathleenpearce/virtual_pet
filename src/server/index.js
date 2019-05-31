require("dotenv").config();

const express = require("express");
const ENV = process.env.ENV || "development";

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const knexConfig = require("../../knexfile.js");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require("knex-logger");

const breed = require("../scripts/breeder.js");
const caculateHungerHappy = require("../scripts/caculate_hunger_and_happiness.js");
const caculateJobPay = require('../scripts/caculate_job_pay.js');

const maxHunger = 200;
const maxHappy = 200;
const payRate = [5,1]
const foodMenu = [{food: 10, price: 30}, {food: 30, price: 70}, {food: 50, price: 100}]


app.use(express.static("dist"));

app.get("/api/getPets", (req, res) => {
  const refrenceTime = new Date().getTime();
  knex.from("jobs")
    .where("user_id", 1)
    .select("*")
    .orderBy("time_at_birth")
    .rightJoin('pets', function(){
      this.on('job_start_time', '=', function(){
          this.select('job_start_time').from('jobs').whereRaw('pet_id = pets.id').orderBy('job_start_time', 'desc').limit(1)
      })
    })
    .asCallback(function(err, pets) {
      res.send({ pets, refrenceTime });
    });
});

app.get("/api/getPets/:petid", (req, res) => {
  const refrenceTime = new Date().getTime();
  knex
    .from("pets")
    .where("id", req.params.petid)
    .select("*")
    .asCallback(function(err, pet) {
      res.send({ pet, refrenceTime });
    });

})

app.post("/api/breed", (req, res) => {
  knex
    .from("pets")
    .where("id", req.body.pet1.id)
    .orWhere("id", req.body.pet2.id)
    .select("*")
    .asCallback(function(err, mates) {
      const baby = breed(1, mates[0], mates[1]);
      knex
        .insert(baby)
        .into("pets")
        .returning('*')
        .asCallback(function(err, newPet) {
          console.log(newPet)
          res.status(201).send(newPet[0]);
        });
    });
});

app.put("/api/pets/:id", (req, res) => {

  var query = knex("pets")
    .where("id", Number(req.params.id))
    .update({'name': req.body.name});


  query.asCallback(function(err) {
    res.status(204).send();
  });
});

app.post("/api/pets/:id/release", (req, res) => {
  const pet = req.body;


  knex
    .from("pets")
    .where("id", req.params.id)
    .select("user_id")
    .asCallback(function(err, user) {
      knex
        .from("pets")
        .where("id", req.params.id)
        .update("user_id", -user[0].user_id)
        .asCallback(function(err) {

          res.status(204).send();
        });
    });
});

app.get("/api/getJobs", (req, res) => {
  knex
    .from("pets")
    .join("jobs", "pets.id", "=", "jobs.pet_id")
    .where("user_id", 1)
    .select("*")
    .asCallback(function(err, jobs) {

      res.send(jobs);
    });
});

app.post("/api/pets/:id/work", (req, res) => {

  const pet = req.body;


  knex
    .from("pets")
    .where("id", req.params.id)
    .select(
      "time_last_fed_or_work",
      "hunger_at_time_last_fed",
      "happiness_at_time_last_fed",
      "strength_gene",
      "intelligence_gene"
    )
    .asCallback(function(err, status) {
      if (err) {
        console.log("send to work err: ", status)
      }

      const time = new Date().getTime();
      const jobStart = caculateHungerHappy(
        time,
        status[0].time_last_fed_or_work,
        status[0].hunger_at_time_last_fed,
        status[0].happiness_at_time_last_fed,
        status[0].strength_gene,
        status[0].intelligence_gene,
        false
      );
      const data = {
        job_start_time: time,
        pet_id: parseInt(req.params.id),
        hunger_at_start: Math.round((jobStart.hunger * maxHunger) / 100),
        happy_at_start: Math.round((jobStart.happiness * maxHappy) / 100),
        job_type: parseInt(1)
      };

      knex.into("pets").where({'id': data.pet_id}).update({'hunger_at_time_last_fed': data.hunger_at_start, 'happiness_at_time_last_fed': data.happy_at_start}).asCallback(function(err){
        knex
          .insert(data)
          .into("jobs")
          .asCallback(function(err) {
            if (err) {
              console.log("insert job err: ", err)
            }
            res.send(204);
          });
      })

    });
});

app.post("/api/pets/:petId/feed/:foodId", (req,res) => {
  const time = new Date().getTime();
  knex("pets")
      .where("pets.id", req.params.petId)
      .join("users", "users.id", "=", "pets.user_id")
      .leftJoin('jobs', function(){
        this.on('job_start_time', '=', function(){
            this.select('job_start_time').from('jobs').whereRaw('pet_id = pets.id').orderBy('job_start_time', 'desc').limit(1)
        })
      })
      .select(
        "time_last_fed_or_work",
        "hunger_at_time_last_fed",
        "happiness_at_time_last_fed",
        "strength_gene",
        "intelligence_gene",
        "user_id",
        "job_end_time",
        "gold"
        )
      .asCallback(function(err, petStats){
        console.log("feed err: ", err)
        console.log("feed pet stats: ", petStats)
        let updateTime = petStats[0].time_last_fed_or_work
        if (petStats[0].job_end_time > updateTime){
          updateTime = petStats[0].job_end_time
        }
        const currentHungerHappy = caculateHungerHappy(
          time,
          updateTime,
          petStats[0].hunger_at_time_last_fed,
          petStats[0].happiness_at_time_last_fed,
          petStats[0].strength_gene,
          petStats[0].intelligence_gene,
          false
          )

        console.log("stats at feed: ", currentHungerHappy)
        let newHunger = Math.round(currentHungerHappy.hunger * maxHunger / 100) + foodMenu[req.params.foodId].food
        if (newHunger > maxHunger) {
          newHunger = maxHunger
        }
        knex.from("pets")
            .where("id", req.params.petId)
            .update({
              "hunger_at_time_last_fed": newHunger,
              "happiness_at_time_last_fed": Math.round(currentHungerHappy.happiness * maxHappy / 100),
              "time_last_fed_or_work": time
            })
            .asCallback(function(err){
              knex.from("users")
                  .where("id", petStats[0].user_id)
                  .update({"gold": petStats[0].gold - foodMenu[req.params.foodId].price})
                  .asCallback(function(err){
                    res.send(204);
      })
    })
  })
})

app.post("/api/jobs/:id", (req, res) => {
  knex.from("jobs")
      .where("jobs.id", req.params.id)
      .join("pets", "pets.id", "=", "pet_id")
      .join("users", "user_id", "=", "users.id")
      .select(
        "job_start_time",
        "hunger_at_time_last_fed",
        "happiness_at_time_last_fed",
        "strength_gene",
        "intelligence_gene",
        "user_id",
        "job_type",
        "pet_id",
        "jobs.id",
        "gold"
      ).asCallback(function(err, data){
        console.log(err)
        console.log("jobs query data: ", data)
          const timeNow = new Date().getTime()
          const payoutTotal = caculateJobPay(timeNow, payRate, data[0])
          console.log(payoutTotal)
          knex.from("users").where("id", data[0].user_id).update({"gold": parseInt(data[0].gold) + Math.round(payoutTotal.payout)}).asCallback(function(err){
            knex.from("pets").where("id", data[0].pet_id).update({"hunger_at_time_last_fed": Math.round((payoutTotal.hunger * maxHunger) / 100), "happiness_at_time_last_fed": Math.round((payoutTotal.happiness * maxHappy) / 100)}).asCallback(function(err){
              if (err) {
                console.log("pets update err: ", err)
              }
              knex.from("jobs").where("id", data[0].id).update({"job_end_time": timeNow}).asCallback(function(err){
                if (err) {
                  console.log("jobs update err: ", err)
                }
                res.send(204);
              })
            })
          })
      })
})


app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
