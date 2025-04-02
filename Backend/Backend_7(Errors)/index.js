const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 8080;
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("ejs", "view engine");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//index route
app.get(
    "/chats",
    asyncWrap(async (req, res) => {
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs", { chats });
    })
);

//new route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

// Create Route
app.post(
    "/chats",
    asyncWrap(async (req, res) => {
        let { from, msg, to } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });
        await newChat
            .save()
            .then((res) => {
                console.log("chat was saved");
            })
            .catch((err) => {});

        res.redirect("/chats");
    })
);

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

//NEW - Show route
app.get(
    "/chats/:id",
    asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(404, "chat not found"));
        }
        res.render("edit.ejs", { chat });
    })
);

//Edit Route
app.get(
    "/chats/:id/edit",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    })
);

//Update Route
app.put(
    "/chats/:id",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
        console.log(updatedChat);
        res.redirect("/chats");
    })
);

//Destroy Route
app.delete(
    "/chats/:id",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    })
);

app.get("/", (req, res) => {
    res.send("get is working fine");
});

const handleValidationErr = (err) => {
    console.log("This is a Validation error please follow rules");
    console.dir(err);
    return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
});

//Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log("server is open");
});
