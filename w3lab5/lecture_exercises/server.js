console.log('server running...')
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const booksrouter = require('./booksrouter');
const exp = require('constants');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(express.json());


app.use('/books', booksrouter)

app.use((req, res, next) => {
    console.log('req url: ' , req.url);
    next();
});

 app.use('/pics', express.static(path.join(__dirname, "images")));



 app.post('/dog', (req, res) => {
     //process req
     //never send response from POST request 
     //redirect to GET 
     res.redirect('/dog');
 })

 app.get('/dog', (req, res) => {
    res.redirect('/chicken'); //-- okay
    //res.redirect('/google.com'); //not run, becuase it not rediect inside server 
    //res.redirect('http://google.com') // it works
});

app.get('/chicken', 
(req, res) => {
    //res.send('Chicken page');
    res.sendFile(path.join( __dirname,'chicken.html'));
});


app.get('/',
(req, res) => {
    res.send("Home");
})

// app.get('/',
// (req, res) => {
//     res.send(" NOt Home");
// })


app.use((req, res) => {
    res.statusCode = 404;
    res.send("The page you are looking for is in another castle....")
});

app.listen(3000, 
    () => console.log("express server running..."));