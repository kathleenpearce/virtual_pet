require('dotenv').config();

const express = require('express');
const ENV         = process.env.ENV || "development";

const app = express();

const knexConfig  = require("../../knexfile.js");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');


app.use(express.static('dist'));
app.get('/api/getPets', (req, res) => {
  knex.from('pets').where('user_id', 1).select('*').asCallback(function(err, pets){
    console.log(pets)
    res.send(pets)
  })
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
