var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var session = require("express-session");
var routerApp = require("./routes_app");

var app = express();

app.use("/static", express.static("public"));
// app.use("/static", express.static("assets"));
app.use(bodyParser.json());
// "extended: true" me permite parsear arrays y strings
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: "R10lu4ndLuc4r10", // secret dummy
	// Define si la sesión tiene que volverse a guardar
	resave: true,
	saveUninitialized: false
}));

app.set("view engine", "jade");

// Routes

app.get("/", function(req, res){
	console.log(req.session.user_id);
	res.render("index");
});

app.get("/signup", function(req, res){
	User.find(function(err, data){
		console.log(data);
	});
	res.render("signup");
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

	// Using Promise, un Promise es lo que me retorna el
	// user.save();
	user.save().then(function(user){
		res.send("Usuario guardado exitosamente");
	}, function(err){
		if (err) {
			console.log(String(err));
			res.send("No pudimos guardar tus datos :(");
		}
	});

});

app.post("/sessions", function(req, res){

	// 1er parámetro: Json con los querys
	// 2o parámetro: columnas retornaddas (omitido en este caso)
	// 3er parámetro: un callback
	User.findOne({
		email: req.body.user_email,
		password: req.body.user_password
	}, function(err, user){
		console.log(user);
		// en req.session se guarda la información de la sesion
		// en este caso se le va a agregar el ._id que genera mongo
		req.session.user_id = user._id;
		res.send("Hola mundo");
	});
});

app.use("/app", routerApp);

app.listen(8080, function(){
	console.log("Listen in http://localhost:8080");
});