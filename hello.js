/**
 * Created by crhis on 29/05/16.
 * Hello world
 */

var http = require("http");

http.createServer(function(req, res){
    console.log("Recibiendo solicitud");
    res.end("Hello world");
}).listen(8080);
