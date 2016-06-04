/**
 * Created by crhis on 29/05/16.
 * Read files
 */

var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){
    fs.readFile("./index.html", function(err, html){

        var html_str = html.toString();
        var variables = html_str.match(/[^\{\}]+(?=\})/g);
        var nombre = "Lucario";

        // variable ["nombre"]
        for (var i = variables.length - 1;  i >= 0 ; i--) {
            var value = eval(variables[i]);
            html_str = html_str.replace("{"+variables[i]+"}", value);
        };

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(html_str);
        res.end();
    });
}).listen(8080, function(){
    console.log("Listen in http://localhost:8080");
});
