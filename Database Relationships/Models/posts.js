const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    // let user1 = new User({
    //     username: "Rancho",
    //     email: "Rancho@gmail.com",
    // });
    let user = await User.findOne({ username: "Rancho" });

    let post1 = new Post({
        content: "Success ke peeche mt bhago",
        likes: 3,
    });

    let post2 = new Post({
        content: "Excellence ke peeche bhago",
        likes: 3,
    });

    // post1.user = user1;
    post2.user = user;

    // await user1.save();
    // await post1.save();

    await post2.save();
};

addData();

// const del = async () => {
//     await Post.findByIdAndDelete("67ef4c0f30c9c79dfe37c7ac");
//     await User.findByIdAndDelete("67ef48b50d24062248bccb93");
// };

// del();
