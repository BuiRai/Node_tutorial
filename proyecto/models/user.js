var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotolucario");

var email_match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var password_validation = {
	validator: function(_pass){
		return this.password_confirmation == _pass;
	},
	message: "Las contraseñas no son iguales"
}

// Se crea un objeto que mongoose entiende
var user_schema = new Schema({
	name: String,
	last_name: String,
	// Validaciones
	username: {
		type: String,
		required: true,
		maxlength: [40, "Username muy grande"]
	},
	// Validaciones
	password: {
		type: String,
		minlength: [4, "El password muy corto"],
		validate: password_validation
	},
	// Validaciones
	age: {
		type: Number,
		min: [4, "La edad no puede ser menor que 4"],
		max: [100, "la edad no puede ser mayor a 100"],
		match: [email_match, "COloca un Email válido"]
	},
	// Validaciones
	email: {
		type: String,
		required: true /*"El correo es obligatorio"*/,
		match: email_match
	},
	birthday: Date,
	// Validaciones
	gender: {
		type: String,
		enum: {
			values: ["M", "F"],
			message: "Opción no valida"
		}
	}
})

user_schema.virtual("password_confirmation").get(function(){
	return this.user_password_confirmation;
}).set(function(password){
	this.user_password_confirmation = password;
});

// 1er parámetro: nombre del modelo
// 2o parámetro: el schema a usar
var User = mongoose.model("User", user_schema);

module.exports.User = User;