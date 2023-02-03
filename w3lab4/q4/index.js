const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json())


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/clientjs', express.static(path.join(__dirname, 'clientjs')))

app.post('/result', (req, res) => {
    console.log('params: ',req.params);
    console.log('body: ', req.body);
    console.log('query: ',req.query);

    let name = req.body.username ? req.body.username: "" ;
    let age = req.body.userage? req.body.userage : "";

    //res.send(`Welcome ${name}, and age ${age}`);
    const outredirect = `/output?name=${name}&age=${age}`
    res.redirect(outredirect);
});

app.get('/output', 
(req, res) => {
    let name = req.query.name ? req.query.name: "" ;
    let age = req.query.age? req.query.age : "";

    res.send(`Welcome ${name}, and age ${age}`);
});

app.get('/', 
(req, res) => {
    res.sendFile(path.join(__dirname, 'userinfo.html'));
});


app.listen(3000);