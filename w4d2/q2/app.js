const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname,'js')));


const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good.",
    "My sources say no.",
    "Very doubtful."
  ];


app.get("/8ball", (req, res) => {
    let answer = answers[Math.floor(Math.random() * answers.length)];
    res.status(200);
    res.json({answer});
    //res.end();
});

app.get("/", (req, res) => {
  res.sendFile( path.join(__dirname,'magicball.html'));
});

app.listen(3000, () => {console.log("W4D2- Q1: Magic Ball server is running")});