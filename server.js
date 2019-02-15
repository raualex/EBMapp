const express = require('express')
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)
const app = express()

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.locals.title = 'EBM Bands';
app.use(express.static('public'));

app.get('https://ebm-app.herokuapp.com/api/v1/ebm_bands', (request, response) => {
  database('ebm_bands').select()
    .then((bands) => {
      response.status(200).json(bands);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})