const mongoose = require("mongoose");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    Author: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200,
});

let book2 = new Book({
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    price: "500",
});

// book1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// book2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Book.findByIdAndUpdate("67db8ad2e937953d23bd6c96", { price: -500 }, {runValidators:true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
