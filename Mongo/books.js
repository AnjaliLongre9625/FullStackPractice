const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
  },
  author: {
    type:String,
  },
  price:{
    type:Number,
  },
  discount:{
    type:Number,
    default:0
  },
  category:{
    type:String,
    enum:["fiction","nonfiction"],
  },
});

const Book=mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("67adc8146cc283b6b77ac63d0",{price:-500}).then(
  (res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });
  
// let book1=new Book({
//     title:"Marvel Comics",
//     price:4000,
//     category:"fiction",
// });

// book1
//   .save() 
//   .then((res) => {
//     console.log("Book saved:", res);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });