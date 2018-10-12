const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

// const Destinations = require('./controllers/destinations')


















app.listen('3000', () => {
  console.log('app is live');
})
