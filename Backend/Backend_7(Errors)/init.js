const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
    {
        from: "rancho",
        to: "raju",
        msg: "bhindi 19₹ kilo",
        created_at: new Date(),
    },
    {
        from: "farhan",
        to: "rancho",
        msg: "abba nhi manege",
        created_at: new Date(),
    },
    {
        from: "farhan",
        to: "chatur",
        msg: "ello",
        created_at: new Date(),
    },
    {
        from: "raju",
        to: "rancho",
        msg: "behen ki shadi karani h",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
