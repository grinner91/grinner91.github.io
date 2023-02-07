const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const exp = require('constants');

app.use(bodyParser.urlencoded());
//app.use(cookieParser.cookieParser());
app.use(cookieParser('my secret here'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.post('/addcookie', (req, res) => {

    const ckey = req.body.ckey;
    const cvalue = req.body.cvalue;
    //console.log('body- ckey: ', req.body.ckey);
    //console.log('body- cval: ', req.body.cvalue);
    //ckies.push( { ckey: value });
    res.cookie(ckey, cvalue);
    //req.cookies[ckey] = value;
    //console.log('cookie key: ',res.cookie(ckey));
    //console.log('req cookies: ', req.cookies);
    //res.send(res.cookies);
    res.redirect('/');
});

app.get('/', (req, res) => {
    
    const cookiesList = req.cookies;
    console.log('/, cookiesList: ', cookiesList);
    console.log('in get /, cookiesList: ', cookiesList);
    res.render('addcookie', {cookiesList: cookiesList});
});


app.listen(3000, () => {console.log("W4d1 server running...")});
