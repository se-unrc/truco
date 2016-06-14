var express = require('express');
var router = express.Router();

var gameModel = require("../models/game");
var Game = gameModel.game;

/* GET home page. */
router.get('/', function (req, res) {
  var game = new Game();
  res.send('Hello World!');
});


module.exports = router;
