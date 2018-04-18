const express = require('express');
const router  = express.Router();
const Restaurant = require('../models/Restaurant')

/* GET home page */
router.get('/', (req, res, next) => {
  Restaurant.find().then( (restaurants)  => {
    console.log(restaurants);
    res.render('index',{restaurants:JSON.stringify(restaurants)});
  })
});

module.exports = router;
