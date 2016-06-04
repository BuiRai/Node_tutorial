/**
 * Created by crhis on 29/05/16.
 * Read files
 */

var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){

    // Si me pide el favicon termino, ya si no me lo pide se prosigue
    // a la función de abajo.
    if ( req.url.indexOf("favicon.ico") > 0 ) { return; }

    fs.readFile("./index.html", function(err, html){

        var html_str = html.toString();
        var arreglo_parametros = [], parametros = {};
        var variables = html_str.match(/[^\{\}]+(?=\})/g);
        var nombre = "Lucario";

        // Se pregunta si contiene un "?"
        if ( req.url.indexOf("?") > 0 ) {
            var url_data = req.url.split("?");
            var arreglo_parametros = url_data[1].split("&");

        }

        for( var i =  arreglo_parametros.length - 1 ; i >= 0 ; i-- ) {
            var parametro = arreglo_parametros[i];
            var param_data = parametro.split("=");

            parametros[param_data[0]] = param_data[1]; 
        }

        // variable ["nombre"]
        for (var i = variables.length - 1;  i >= 0 ; i--) {
            var variable = variables[i];
            html_str = html_str.replace("{"+variables[i]+"}", parametros[variable]);
        };

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(html_str);
        res.end();
    });
}).listen(8080, function(){
    console.log("Listen in http://localhost:8080");
});
