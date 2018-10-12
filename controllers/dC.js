const express = require('express');
const router = express.Router();

const Destinations = require('../models/destinations');

router.get('/', (req, res) => {
  res.send('say hello');

})






module.exports = router;
