const express = require('express');
const router= express.Router();
const homeController = require('../controllers/home_controller');



console.log("routes");


router.get('/',homeController.home);

router.use('/users', require('./users'));
//for any for the routes access from here


module.exports = router;