const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

// Correctly setting the views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsappDB");
}

let chat1=new Chat({
  from:"Anjali",
  to:"Sumiee",
  msg:"dont irritate me ",
  created_at:new Date()
});
chat1.save().then(res=>{
  console.log(res);
});

app.get("/", (req, res) => {
  res.send("Root is working!");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
