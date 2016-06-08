var express = require("express");
var Image = require("./models/image");
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
		Image.findById(req.params.id, function(err, image){
			res.render("app/imagenes/show", {image: image});
		});
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
		var data = {
			title: req.body.title
		}
		var image = new Image(data);
		image.save(function(err){
			if ( !err ) {
				res.redirect("/app/imagenes/" + image._id);
			}else{
				res.render(err);
			}
		});
	});

module.exports = router;