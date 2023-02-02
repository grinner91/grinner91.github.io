//Node Js
const Student = require('./student')

console.log("Hellooo Nodejs!!!!!!!!!!!!");

// console.log(Student)

// let std1 = new Student(1, "zaman");

// console.log(std1);

const http = require('http');

let server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.end("Home page");
    }
    else if(req.url == "/customers") {
        res.statusCode = 200;
        res.end("Cusomer page")
    }
});

server.listen(3000,() => {
    console.log("server is running...");
});
