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

app.use(express.static("dist"));
app.get("/api/getPets", (req, res) => {
  knex
    .from("pets")
    .where("user_id", 1)
    .select("*")
    .orderBy("time_at_birth")
    .asCallback(function(err, pets) {
      res.send(pets);
    });
});

app.post("/api/breed", (req, res) => {
  knex
    .from("pets")
    .where("id", req.body.pet1)
    .orWhere("id", req.body.pet2)
    .select("*")
    .asCallback(function(err, mates) {
      const baby = breed(1, mates[0], mates[1]);
      knex
        .insert(baby)
        .into("pets")
        .asCallback(function(err) {
          res.status(201).json(baby);
        });
    });
});

app.put("/api/pets/:id", (req, res) => {
  const pet = req.body;

  var query = knex("pets")
    .where("id", Number(req.params.id))
    .update(pet);

  console.log(query.toString());

  query.asCallback(function(err) {
    res.status(204).send();
  });
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
