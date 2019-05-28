require('dotenv').config();

const express = require('express');
const ENV         = process.env.ENV || "development";

const app = express();
const bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


const knexConfig  = require("../../knexfile.js");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

const breed = require('../scripts/breeder.js')
const caculateHungerHappy = require ('../scripts/caculate_hunger_and_happiness.js')

const maxHunger = 200
const maxHappy = 200



app.use(express.static('dist'));
const refrenceTime = new Date().getTime()
app.get('/api/getPets', (req, res) => {
  knex.from('pets').where('user_id', 1).select('*').asCallback(function(err, pets){
    res.send({pets, refrenceTime})
  })
})

app.post('/api/breed', (req, res) => {
  knex.from('pets').where('id', req.body.pet1).orWhere('id', req.body.pet2).select('*').asCallback(function(err, mates){
    const baby = breed(1, mates[0], mates[1])
    knex.insert(baby).into('pets').asCallback(function(err){
      res.redirect('/')
    })
  })
})

app.post('/api/jobs', (req, res) => {
  knex.from('pets').where('id', req.body.pet).select('time_last_fed_or_work', 'hunger_at_time_last_fed', 'happiness_at_time_last_fed', 'strength_gene', 'intelligence_gene').asCallback(function(err, status){
    const time = new Date().getTime()
    const jobStart = caculateHungerHappy(time, status[0].time_last_fed_or_work, status[0].hunger_at_time_last_fed, status[0].happiness_at_time_last_fed, status[0].strength_gene, status[0].intelligence_gene, false)
    const data = {job_start_time: time.getTime(), pet_id: parseInt(req.body.pet), hunger_at_start: Math.round(jobStart.hunger*maxHunger/100), happy_at_start: Math.round(jobStart.happiness*maxHappy/100), job_type: parseInt(req.body.job_type)}
    knex.insert(data).into('jobs').asCallback(function(err){
      console.log(data)
      res.redirect('/')
    })
  })
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
