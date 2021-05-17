const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('game_1.ejs');
})

app.get('/game2',(req,res)=>{
    res.render('game_2.ejs');
})
app.listen(3030,(res,err)=>{
    if(err) console.log(err)
    else console.log("listening on localhost:3030")
})