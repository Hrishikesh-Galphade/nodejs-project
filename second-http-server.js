//Create Http Server
var http = require("http");
var fs = require("fs")


var server = http.createServer(function(req,res){
    console.log(req.url)
    if(req.url !="/favicon.ico" ){

        console.log(req.headers);
        if(req.url == '/')   
        {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            fs.createReadStream('./home.html').pipe(res)       
                
        }
        if(req.url == '/contact-us') 
        {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            fs.createReadStream('./contact.html').pipe(res)
                
        }
        if(req.url == '/carier') 
        {
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            fs.createReadStream('./carrier.html').pipe(res)
        }


            
        }
        else{
        res.end("Welcome to full stack world");  
        }
    });

server.listen(8081,function(){
    console.log("Server is running on port 8081");
});

