const express = require("express");
const app = express();
// console.dir(app);
let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port : ${port}`);
});
app.get("/:username/:id",(req,res) => {
    console.log(req.params);
    let {username,id} = req.params;
    res.send(`Welcome to the page @${username}\nYour id is ${id}`);
});
app.get("/home",(req,res) => {
    res.send("You contacted home");
});
app.get("/apple",(req,res) => {
    res.send("you contacted apple");
});
app.get("/orange",(req,res) => {
    res.send("you contacted orange");
});
// app.get("*",(req,res) => {
//     res.send("this path does not exist");
// });
app.post("/",(req,res) =>{
    res.send("you sent a post request");
});
app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q){
        res.send("nothing searched");
    }
    res.send(`search results for query: ${q}`);
});
// app.use((req,res) => {
//     console.log("request received");
//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // });
//     res.send("<h1>Standard response</h1>");
// });