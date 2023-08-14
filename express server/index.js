const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', function(req,res){
    res.send("Hello World");
});

app.post('/home', function(req,res){
    res.send("Welcome to home");
});

app.patch('/faq', function(req,res){
    res.json({
        message:"This is a patch request",
        success:true
    });
});


app.listen(PORT, function process(){
    console.log("server started at port ",PORT); 
});

