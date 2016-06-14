/*
 * Represents a player in the game
 * @param name [String]: old state to intialize the new state
 */
var config = require('../config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var db = mongoose.createConnection(config.db[process.env.NODE_ENV]);

/*
 * User Schema
 */
var UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: String
});

var User = mongoose.model('User', UserSchema);

module.exports.user = User;
