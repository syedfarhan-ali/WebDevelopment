const express = require("express");
const app = express();

const port = 8080;

//middlewares
// app.use((req, res, next) => {
//     console.log("This is 1st middleware");
//     next();
//     console.log("This is after next in 1st middleware");
// });

// app.use((req, res, next) => {
//     console.log("This is 2nd middleware");
//     return next();
//     console.log("This is after next in 2nd middleware");
// });

// app.use((req, res, next) => {
//     console.log("This is 3rd middleware");
//     next();
//     console.log("This is after next in 3rd middleware");
// });

app.use((req, res, next) => {
    req.time = new Date(Date.now());
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.use("/random", (req, res, next) => {
    console.log(" this is middle ware for random");
    next();
});

//Api routes
app.get("/", (req, res) => {
    res.send("This is root");
});

app.get("/random", (req, res) => {
    res.send("This is random");
});

//404

app.use((req, res) => {
    res.send("404 page not found");
});

app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});
