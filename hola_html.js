/**
 * Created by crhis on 29/05/16.
 * Read files
 */

var http = require("http"),
    fs = require("fs");

var html = fs.readFile("./index.html", function(err, html){
    http.createServer(function(req, res){
        res.writeHead(200, {
            "Content-Type" : "application/json"
        });

        // Esto escribe el HTML (index.html) que está en la carpeta.
        // res.write(index);

        // Esto manda un JSON
        res.write(JSON.stringify({
            nombre : "Crhis",
            username : "BuiRai"
        }));
        res.end();
    }).listen(8080);
});
