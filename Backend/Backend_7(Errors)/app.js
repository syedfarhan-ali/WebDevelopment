const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const port = 8080;

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

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

app.get("/err", (req, res) => {
    abcd = abcd;
});

//403
app.get("/admin", (req, res) => {
    throw new ExpressError(403, "ACCESS TO ADMIN IS FORBIDDEN");
});

app.use((err, req, res, next) => {
    console.log("----- ERROR -----");
    let { status = 500, message = "Some error occured" } = err;
    res.status(status).send(message);
});

//404

app.use((req, res) => {
    res.send("404 page not found");
});

app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});
