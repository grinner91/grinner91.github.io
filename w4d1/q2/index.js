const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json())
app.use(session({secret: "mysupersecretsessionkeyvalues"}));


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/clientjs', express.static(path.join(__dirname, 'clientjs')))

app.post('/result', (req, res) => {
    console.log('params: ',req.params);
    console.log('body: ', req.body);
    console.log('query: ',req.query);

    let name = req.body.username ? req.body.username: "" ;
    let age = req.body.userage? req.body.userage : "";

    let userList = [];
    if(req.session.userList) {
        userList = req.session.userList;
    }
    userList.push({name: name, age: age});
    req.session.userList = userList;
    //res.send(`Welcome ${name}, and age ${age}`);
    const outredirect = '/output'; //`/output?name=${name}&age=${age}`
    res.redirect(outredirect);
});

app.get('/output', 
(req, res) => {
    //let name = req.query.name ? req.query.name: "" ;
    //let age = req.query.age? req.query.age : "";
    console.log('req.session.userList: ', req.session.userList);
    let name = req.session.userList[0].name;
    let age = req.session.userList[0].age;
    res.send(`Welcome ${name}, and age ${age}`);
});

app.get('/', 
(req, res) => {
    res.sendFile(path.join(__dirname, 'userinfo.html'));
});


app.listen(3000, () => {console.log("W4D1 - Q2: server running")});