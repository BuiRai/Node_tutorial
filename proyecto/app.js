var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var app = express();

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
		username: req.body.username,
		email: req.body.user_email,
		password: req.body.user_password,
		password_confirmation: req.body.user_password_confirmation
	});

	user.save(function(err){
		if (err) {
			console.log(String(err));
		}
		res.send("Guardamos tus datos");
	});
});

app.listen(8080, function(){
	console.log("Listen in http://localhost:8080");
});