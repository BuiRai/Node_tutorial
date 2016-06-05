var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotolucario");

// Se crea un objeto que mongoose entiende
var user_schema = new Schema({
	name: String,
	username: String,
	password: String,
	age: Number,
	email: String,
	birthday: Date
});

// 1er parámetro: nombre del modelo
// 2o parámetro: el schema a usar
var User = mongoose.model("User", user_schema);

module.exports.User = User;