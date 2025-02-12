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

// Corrected model definition
const User = mongoose.model('User', userSchema); // Removed extra parentheses

User.findByIdAndDelete("67ac9d27e93aa08dbb73a652").then((res)=>{
        console.log(res);
});
// User.deleteOne({name:"Bruce"})
//   .then((res)=>{
//       console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// User.deleteMany({age:19})
//   .then((res)=>{
//       console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// User.updateOne({name:"Ali"})
// User.find({age:{$gt:19}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 20 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 20 },
//   { name: "Ali", email: "ali@gmail.com", age: 20 },
//   { name: "Sumit", email: "sumit@example.com", age: 20 }
// ]).then((res) => {
//   console.log(res);  // This will log all inserted documents
// });


// Optionally, you can test by creating a new User instance
// const user2 = new User({
//   name: 'Sumit',
//   email: 'sumit@example.com',
//   age: 20,
// });

// user2
//     .save()
//     .then((res)=>{
//     console.log(res);
// })
//     .catch((err)=>{
//     console.log(err);
//     });




