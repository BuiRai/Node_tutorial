var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index", {
		"hola": "Hola BuiRai"
	});
});

app.listen(8080, function(){
	console.log("Visit http://localhost:8080");
});