//Name: Amrit Saigal
//File Name:Express Portfolio
//Student Number: 301217316
//September 28, 2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('LOREM IPSUM');
});

module.exports = router;
