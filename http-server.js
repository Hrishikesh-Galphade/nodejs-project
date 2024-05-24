//Create Http Server
var http = require("http");
var fs = require("fs")
var path = require('path');
var mime = require('mime-types');


// var type = mime.lookup('html');
// console.log(type);
// type = mime.lookup('jpeg');
// console.log(type);
// type = mime.lookup('png');
// console.log(type);
// type = mime.lookup('mp4');
// console.log(type);

var server = http.createServer(function(req,res){
    console.log(req.url)
    if(req.url !="/favicon.ico" ){

        console.log(req.url);
        //mime lookup Code


        // if(req.url == '/')   
        // {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type','text/html')
        //     fs.createReadStream('./home.html').pipe(res)       
                
        // }
        // if(req.url == '/contact-us') 
        // {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type','text/html')
        //     fs.createReadStream('./contact.html').pipe(res)
                
        // }
        // if(req.url == '/carier') 
        // {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type','text/html')
        //     fs.createReadStream('./carrier.html').pipe(res)
        // }

            
            if (req.url == '/' ){
                req.url = "/home.html"
            }
            if(fs.existsSync("./public/"+req.url)){

                var file_extentions = path.extname(req.url);
                var mime_type = mime.lookup(file_extentions);
                res.statusCode = 200;
                res.setHeader('Content-Type',mime_type)
                fs.createReadStream("./public/"+req.url).pipe(res)
            }
            else{
                res.statusCode = 404;
                res.setHeader('Content-Type','text/html')
                res.end("<html><body><h1>Error 404: Page Not Found</h1></body></html>")
            }
         
            
        }
        else{
        res.end("Welcome to full stack world");  
        }
    });

server.listen(8080,function(){
    console.log("Server is running on port 8080");
});

