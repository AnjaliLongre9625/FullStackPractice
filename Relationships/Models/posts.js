const mongoose = require("mongoose");
const { Schema } = mongoose;

// ✅ Connect to MongoDB
main()
  .then(() => console.log("Connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// ✅ Define User Schema
const userSchema = new Schema({
  username: String,
  email: String,
});

// ✅ Define Post Schema (Referencing User)
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// ✅ Create Models
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// ✅ Function to Add Data
const addData = async () => {
  let user = await User.findOne({ username: "Anjali" });

  if (!user) {
    user = new User({
      username: "Anjali",
      email: "anjali@example.com"
    });
    await user.save();
  }

  let post2 = new Post({
    content: "Bye Bye!",
    likes: 500,
    user: user._id
  });

  await post2.save();
  console.log("Post added successfully!");
};

//  Function to Get Data (with Populate)
const getData = async () => {
  let result = await Post.findOne({}).populate("user"); // ✅ Correct field name
  console.log(result);
};

//  Run Functions
getData(); // ✅ Get populated data
