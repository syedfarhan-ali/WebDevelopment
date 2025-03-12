const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/register",(req,res) => {
    let {user,pass} = req.query;
    res.send(`Standard GET response, Welcome ${user} Your password is ${pass}`);
});

app.post("/register",(req,res) => {
    let {user,pass} = req.body;
    res.send(`Standard POST response, Welcome ${user} your password is ${pass}`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});