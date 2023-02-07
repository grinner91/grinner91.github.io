const studentClass = require('./Student');
const http = require('http');

let server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end('Home Page');
    }
    if(req.url == "/customers"){
        //res.statusCode = 404;
        res.end('Customers Page');
    }
    if(req.url == "/products"){
        res.end('Producs Page');
    }
});

server.listen(3000,()=>{
    console.log("Server is running....");
});
