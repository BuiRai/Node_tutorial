var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
	res.render("app/home");
});

router.get("/imagenes/new", function(req, res){ //Route to add a new image (view)
	res.render("app/imagenes/new");
});

router.get("/imagenes/:id/edit", function(req, res){ //Route to edit a new image (view)

});

// COnjunto de rutas para "/imagenes/:id"
router.route("/imagenes/:id")
	.get(function(req, res){

	})
	.put(function(req, res){

	})
	.delete(function(req, res){

	});

// Conjunto de rutas para "/imagenes"
router.route("/imagenes")
	.get(function(req, res){

	})
	.post(function(req, res){

	});

module.exports = router;