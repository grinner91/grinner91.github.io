const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

 app.use(bodyParser.urlencoded());
// app.use(express.json())

app.post('/result', (req, res) => {
    console.log('params: ',req.params);
    console.log('body: ', req.body);
    console.log('query: ',req.query);

    let name = req.body.username ? req.body.username: "" ;
    let age = req.body.userage? req.body.userage : "";

    //res.send(`Welcome ${name}, and age ${age}`);
    res.render('result', {name: name, age: age});
});

app.get('/', 
(req, res) => {
    //res.sendFile(path.join(__dirname, 'userinfo.html'));
    res.render('userinfo.ejs');
});


app.listen(3000);