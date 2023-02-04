const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hours = date.hours;
    const stylecss = hours >= 6 && hours <= 18 ? 'day.css' : 'night.css';
    res.render('index', {time: date.toTimeString(), style: stylecss});
})


app.listen(3000, () => console.log('EJS server running....'));

