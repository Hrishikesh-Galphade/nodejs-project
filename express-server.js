var express = require('express');
var path =require('path')
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome To Express');
});

app.get('/ram',(req,res)=>{
    res.send('Welcome To Express Ram');
});

app.get('/samadhan',(req,res)=>{
    res.send('Welcome To Express samadhan');
});
app.get('/lala',(req,res)=>{
    res.send('Welcome To Express lala');
});


app.listen(8080,()=>{
    console.log('Server is listining on 8080')
})