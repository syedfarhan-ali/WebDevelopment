const mongoose = require("mongoose");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// const user2 = new User({
//     name: "Rancho",
//     email: "rancho@gmail.com",
//     age: 24,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     { name: "Virus", email: "virus@yahoo.com", age: 60 },
//     { name: "Chatur", email: "chatur@yahoo.com", age: 28 },
//     { name: "Raju", email: "raju@engineering.com", age: 23 },
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.find({age:{$gt:50}})
//     .then((res) => {
//         console.log(res[0].name);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.updateOne({ name: "Virus" }, { age: 50 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.findOneAndUpdate({name:"Virus"},{age:42},{new:true})
//     .then((res) => {
//         console.log(res);
//     })``
//     .catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndUpdate({_id:"67db72b3e8f871f8f26710bf"},{age:60},{new:true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.deleteOne({name:"Virus"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndDelete("67db72b3e8f871f8f26710c0")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

User.findOneAndDelete({name:"Rancho"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });