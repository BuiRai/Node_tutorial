var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema; // La clase Schema viene de mongoose

mongoose.connect("mongodb://localhost/fotolucario");

var userSchemaJSON = {
	email: String,
	password: String
};

var user_schema = new Schema(userSchemaJSON); // Se crea un objeto que mongoose entiende

var User = mongoose.model("User", user_schema); // Se crea un modelo y a partir de ello el documento en mongoDB

app.use("/static", express.static("public"));
// app.use("/static", express.static("assets"));

app.use(bodyParser.json());
// "extended: true" me permite parsear arrays y strings
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index");
});

app.get("/login", function(req, res){
	User.find(function(err, data){
		console.log(data);
	});
	res.render("login");
});

app.post("/users", function(req, res){
	var user = new User({
		email: req.body.user_email,
		password: req.body.user_password,
	});

	user.save(function(){
		res.send("Guardamos tus datos");
	});
});

app.listen(8080, function(){
	console.log("Listen in http://localhost:8080");
});