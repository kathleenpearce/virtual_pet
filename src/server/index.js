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
const newRandomPet = require('../scripts/new_random_pet.js')

const maxHunger = 200;
const maxHappy = 200;
const statusSpeed = 10

const payRate = [[5,1], [3,3], [1,5]]
const foodMenu = [{food: 10, price: 125}, {food: 30, price: 250}, {food: 50, price: 350}]


app.use(express.static("dist"));

app.get("/api/getPets", (req, res) => {
  const refrenceTime = new Date().getTime();

  knex.from("jobs")
    .where("user_id", 1)
    .select("*")
    .orderBy("time_at_birth")
    .rightJoin('pets', function(){
      this.on('job_start_time', '=', function(){
          this.select('job_start_time')
          .from('jobs')
          .whereRaw('pet_id = pets.id')
          .orderBy('job_start_time', 'desc')
          .limit(1)
      })
    })
    .asCallback(function(err, pets) {
      res.status(201).send({ pets, refrenceTime });
    });
});

app.get("/api/getUser", (req, res) => {
  knex.from("users")
      .where("id", 1)
      .first("*")
      .asCallback(function(err, user) {
        res.status(201).send(user)
      })
})

app.get("/api/getPets/:petid", (req, res) => {
  console.log(req.params.pet)
  const refrenceTime = new Date().getTime();
  knex
    .from("pets")
    .where("pets.id", req.params.petid)
    .select("*")
    .leftJoin('jobs', function(){
        this.on('job_start_time', '=', function(){
            this.select('job_start_time')
                .from('jobs')
                .whereRaw('pet_id = pets.id')
                .orderBy('job_start_time', 'desc')
                .limit(1)
        })
      })
    .asCallback(function(err, pet) {
      if (err) {
        console.log("get single pet err: ", err)
      }
      const withId = Object.assign(pet[0], {pet_id: req.params.petid})
      res.status(201).send({ pet, refrenceTime });
    });

})

app.post("/api/login", (req, res, username) => {
 console.log(req.body)

  knex
    .from("users")
    .where("name", req.body.username)
    .select("*")
    .asCallback((err, user) => {
      if (user.length) {
        res.send(user[0])
      } else {

        knex("users")
        .insert({name: req.body.username, gold: 100000}).returning("*")
        .asCallback((err, user) => {

          const newPets = [newRandomPet(user[0]), newRandomPet(user[0]), newRandomPet(user[0])]
          console.log("newPets", newPets)
          console.log("user", user)
          knex("pets")
            .insert(newPets).asCallback(function(err) {
              console.log("error", err)

              res.status(201).send(user[0])
            })

      })
    }
})


  // .then(function (username) {
  //   res.send(username)
  // })
})

app.post("/api/breed", (req, res) => {
  if (req.body.pet1.pet_id != req.body.pet2.pet_id){
    knex
      .from("pets")
      .where("id", req.body.pet1.pet_id)
      .orWhere("id", req.body.pet2.pet_id)
      .select("*")
      .asCallback(function(err, mates) {
        if (err) {
          console.log("breeding err: ", err)
        }
        const baby = breed(1, mates[0], mates[1]);
        knex
          .insert(baby)
          .into("pets")
          .returning('*')
          .asCallback(function(err, newPet) {
            knex
              .from("users")
              .select("gold")
              .where("id", 1)
              .asCallback(function(err, gold) {
                knex
                  .from("users")
                  .update({"gold": gold[0].gold - 20000})
                  .returning("gold")
                  .where("id", 1)
                  .asCallback(function(err, newGold) {
                    console.log("newGold", newGold)
                    const withId = Object.assign(newPet[0], {pet_id: newPet[0].id})
                    res.status(201).send({withId, newGold});

                  })

              })

          });
      });
    } else {
      res.status(406)
    }
});

app.put("/api/pets/:id", (req, res) => {
  console.log(req.params.id, req.body.name)

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
      console.log('release: ',err)
      knex
        .from("pets")
        .where("id", req.params.id)
        .update("user_id", -user[0].user_id)
        .asCallback(function(err) {
          if (err) {
            console.log('release: ',err)
          }
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
  knex
    .from("pets")
    .where("pets.id", req.params.id)
    .select(
      "time_last_fed_or_work",
      "hunger_at_time_last_fed",
      "happiness_at_time_last_fed",
      "strength_gene",
      "intelligence_gene",
      "job_start_time",
      "job_end_time"
    )
    .leftJoin('jobs', function(){
        this.on('job_start_time', '=', function(){
            this.select('job_start_time')
                .from('jobs')
                .whereRaw('pet_id = pets.id')
                .orderBy('job_start_time', 'desc')
                .limit(1)
        })
      })
    .asCallback(function(err, status) {
      if (err) {
        console.log("send to work err: ", status)
      }
      let updateTime = status[0].time_last_fed_or_work
        if (status[0].job_end_time > updateTime){
          updateTime = status[0].job_end_time
        } else if (status[0].job_start_time > updateTime) {
          updateTime = status[0].job_start_time
        }

      const time = new Date().getTime();
      const jobStart = caculateHungerHappy(
        time,
        updateTime,
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

      knex
        .into("pets")
        .where({'id': data.pet_id})
        .update({
          'hunger_at_time_last_fed': data.hunger_at_start,
          'happiness_at_time_last_fed': data.happy_at_start,
          'time_last_fed_or_work': time
        })
        .returning("*")
        .asCallback(function(err, pet){
        knex
          .insert(data)
          .into("jobs")
          .returning("*")
          .asCallback(function(err, job) {
            if (err) {
              console.log("insert job err: ", err)
            }
            const output = Object.assign(pet[0], job[0])
            console.log("send pet to work: ", output.hunger_at_time_last_fed)
            res.status(201).send(output);
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
            this.select('job_start_time')
                .from('jobs')
                .whereRaw('pet_id = pets.id')
                .orderBy('job_start_time', 'desc')
                .limit(1)
        })
      })
      .select(
        "time_last_fed_or_work",
        "job_end_time",
        "job_start_time",
        "hunger_at_time_last_fed",
        "happiness_at_time_last_fed",
        "strength_gene",
        "intelligence_gene",
        "user_id",
        "job_end_time",
        "gold"
        )
      .asCallback(function(err, petStats){
        if (err) {
          console.log("feed err: ", err)
        }
        let updateTime = petStats[0].time_last_fed_or_work
        if (petStats[0].job_end_time > updateTime){
          updateTime = petStats[0].job_end_time
        } else if (petStats[0].job_start_time > updateTime) {
          updateTime = petStats[0].job_start_time
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

        let newHappy = Math.round(currentHungerHappy.happiness * maxHappy / 100)


        knex.from("pets")
            .where("id", req.params.petId)
            .update({
              "hunger_at_time_last_fed": newHunger,
              "happiness_at_time_last_fed": newHappy,
              "time_last_fed_or_work": time
            })
            .returning('*')
            .asCallback(function(err, pet){
              console.log(err)
              console.log(pet[0])
              knex.from("users")
                  .where("id", petStats[0].user_id)
                  .update({"gold": petStats[0].gold - foodMenu[req.params.foodId].price})
                  .returning("gold")
                  .asCallback(function(err, gold){
                    res.status(201).send({pet: pet[0], gold: gold[0]});
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
        "job_end_time",
        "time_last_fed_or_work",
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
        console.log("pet going to work: ", data[0].hunger_at_time_last_fed)
          const timeNow = new Date().getTime()
          const payoutTotal = caculateJobPay(timeNow, payRate[0], data[0])
          console.log("payout total: ", payoutTotal)
          knex
            .from("users")
            .where("id", data[0].user_id)
            .update({"gold": parseInt(data[0].gold) + Math.round(payoutTotal.payout)})
            .returning("*")
            .asCallback(function(err, gold){
              knex
                .from("pets")
                .where("id", data[0].pet_id)
                .update({
                  "hunger_at_time_last_fed": Math.round((payoutTotal.hunger * 2)),
                  "happiness_at_time_last_fed": Math.round((payoutTotal.happiness * maxHappy) / 100)})
                .returning("*")
                .asCallback(function(err, pet){
                  if (err) {
                    console.log("pets update err: ", err)
                  }
                  knex
                    .from("jobs")
                    .where("id", data[0].id)
                    .update({"job_end_time": timeNow})
                    .returning("*")
                    .asCallback(function(err, job){
                      if (err) {
                        console.log("jobs update err: ", err)
                      }

                      const output = Object.assign(pet[0], job[0])
                      res.status(201).send({output, gold});
              })
            })
          })
      })
})

app.post("/api/users/:userId/buypet", (req, res) => {
  console.log("new pet")
  const newPet = newRandomPet(req.params.userId)
  knex
    .insert(newPet)
    .into("pets")
    .returning('*')
    .asCallback(function(err, newPet) {
      knex
      .from("users")
      .where("id", 1)
      .select("gold")
      .asCallback(function(err, gold) {
        knex
        .from("users")
        .where("id", 1)
        .update({"gold": gold[0].gold - 20000})
        .returning("*")
      .asCallback(function(err, userUpdate) {
        res.status(201).send({newPet, userUpdate});
      })
    })

  });
})


app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
