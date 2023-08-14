const http = require('http');
const PORT = 3000;

const server = http.createServer(function exec(req,res){   
    if(req.url == '/home'){
        res.end("Welcome to home");
    } 
    else if(req.url == 'faq'){
        res.end("List of FAQ's");
    }
    else{
        res.end("Hello World");
    }
});

server.listen(PORT, function process(){
    console.log("server started at port ",PORT); 
});

