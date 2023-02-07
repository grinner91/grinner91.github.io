const express = require('express');
const app = express();
const bparser = require('body-parser');
const booksroute = require('./booksrouter');
const path = require('path');

app.use(bparser.urlencoded());
app.use(express.json());

app.use('/pics', express.static(path.join(__dirname, "public", "images")));
app.use('/css', express.static(path.join(__dirname, "public", "styles")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "public", "views"));

app.use('/books',booksroute);

app.post('/dog', (req, res)=>{
    let item = req.body.secretpassword;
    console.log(item);
    res.redirect('/dog');
});
app.get('/dog', (req, res)=>{ 
    const names = [
        "Bella",
        "Lucy",
        "Daisy",
        "Molly",
        "Lola",
        "Sophie",
        "Sadie",
        "Maggie",
        "Chloe",
        "Bailey",
        "Roxy",
        "Zoey",
        "Lily",
        "Luna",
        "Coco",
        "Stella",
        "Gracie",
        "Abby",
        "Penny",
        "Zoe",
        "Ginger",
        "Ruby",
        "Rosie",
        "Lilly",
        "Ellie",
        "Mia",
        "Sasha",
        "Lulu",
        "Pepper",
        "Nala",
        "Lexi",
        "Lady",
        "Emma",
        "Riley",
        "Dixie",
        "Annie",
        "Maddie",
        "Piper",
        "Princess",
        "Izzy",
        "Maya",
        "Olive",
        "Cookie",
        "Roxie",
        "Angel",
        "Belle",
        "Layla",
        "Missy",
        "Cali",
        "Honey",
        "Millie",
        "Harley",
        "Marley",
        "Holly",
        "Kona",
        "Shelby",
        "Jasmine",
        "Ella",
        "Charlie",
        "Minnie",
        "Willow",
        "Phoebe",
        "Callie",
        "Scout",
        "Katie",
        "Dakota",
        "Sugar",
        "Sandy",
        "Josie",
        "Macy",
        "Trixie",
        "Winnie",
        "Peanut",
        "Mimi",
        "Hazel",
        "Mocha",
        "Cleo",
        "Hannah",
        "Athena",
        "Lacey",
        "Sassy",
        "Lucky",
        "Bonnie",
        "Allie",
        "Brandy",
        "Sydney",
        "Casey",
        "Gigi",
        "Baby",
        "Madison",
        "Heidi",
        "Sally",
        "Shadow",
        "Cocoa",
        "Pebbles",
        "Misty",
        "Nikki",
        "Lexie",
        "Grace",
        "Sierra"
    ];
    let item = req.query.searchterm;
    res.render("dogpage", {title:item, dognames:names.filter((x)=> x.startsWith("S"))});
});
app.get('/chicken', (req, res)=>{
    let u = path.join(__dirname,'chicken.html');
    res.sendFile(u);
});

app.get('/', (req, res)=>{
    res.send("Home");
});

app.use((req, res)=>{
    res.status(404);
    res.send("The page you are looking for is in another castle.");
});
app.listen(3000, ()=> console.log("Server is running...."));


/* 
function x (i){
    if(i == "/"){
        return 1
    }
    if(i == "y"){
        return 2
    }
    if(i == "z"){
        return 3
    }
}
*/