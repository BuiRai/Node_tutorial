/**
 * Created by crhis on 29/05/16.
 * Read files
 */

var http = require("http"),
	fs = require("fs"),
	params_parser= require("./params_parser.js");

var parse_function = params_parser.parse;
var renderView_function = params_parser.renderView;

http.createServer(function(req, res){

	// Si me pide el favicon termino, ya si no me lo pide se prosigue
	// a la función de abajo.
	if ( req.url.indexOf("favicon.ico") > 0 ) { return; }

	fs.readFile("./index.html", function(err, html){

		var parametros = parse_function(req);
		var html_str = renderView_function(html, parametros);
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write(html_str);
		res.end();
		
	});
}).listen(8080, function(){
	console.log("Listen in http://localhost:8080");
});
