var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user_schema = new Schema({
	name: String,
	username: String,
	password: String,
	age: Number,
	email: String,
	birthday: Date
});