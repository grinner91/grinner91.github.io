const express = require('express');
const router  = express.Router();

const app = express();

app.use((req, res, next) => {
    console.log('req url: ' , req.url);
    next();
});

// /books
router.get('/',(req, res)=>{
    res.send('Books home')
});


//  /books/bestsellers
router.get('/bestsellers', 
(req, res) => { 
    res.send('Best sellers page')
});

router.get('/romance', 
(req, res) => { 
    res.send('Best Romance page')
});


module.exports = router;