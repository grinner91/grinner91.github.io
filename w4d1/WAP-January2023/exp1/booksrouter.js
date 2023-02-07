const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log(req.url);
    next();
});
router.get('/', (req, res)=>{
    res.send("Main books page!");
});
// /books/bestsellers
router.get('/bestsellers', (req, res)=>{
    res.send("Best Sellers Page!");
});
router.get('/romance', (req, res)=>{
    res.send("Best Romance Books!");
});
router.get('/adventure', (req, res)=>{
    res.send("Best Adventure Books!");
});

module.exports = router;