//create http server
var http = require("http");
var server = http.createServer(function(req,res){
    res.end("Welcome to full stack world");
});

server.listen(8080,function(){
    console.log("Server is running on port 8080");
});