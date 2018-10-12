const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



app.get('/', (req, res) => {
  res.send('its alive')
})



















app.listen('3000', () => {
  console.log('app is live');
})
