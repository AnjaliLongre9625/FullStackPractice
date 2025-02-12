const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
 }

 const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  });

const User=mongoose.model(('User',userSchema));










