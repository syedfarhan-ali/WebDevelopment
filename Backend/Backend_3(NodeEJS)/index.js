const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res) => {
    res.render("home");
});

app.get("/hello",(req,res) => {
    res.send("hello");
});

app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal});//we can aslo do {num:diceVal}
});

app.get("/ig/:username",(req,res) => {
    // const followers = ["kira","ryuk","lawliet","near"];
    // let {username} = req.params;
    // res.render("instagram.ejs",{username,followers});
    
    const {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        console.log(data);
    }else{
        res.render("error.ejs");
    }

    res.render("instagram.ejs",{data});
});

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})