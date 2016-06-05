var express = require("express");
var bodyParser = require("body-parser");
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
	res.render("login");
});

app.post("/users", function(req, res){
	console.log("Email: " + req.body.user_email);
	console.log("Password: " + req.body.user_password);
	res.send("Recibimos tus datos");
});

app.listen(8080, function(){
	console.log("Listen in http://localhost:8080");
});