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
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price must be at least 1"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "nonfiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

// Replace with a valid ObjectId from your collection
const validId = "64adc8146cc283b6b77ac63d"; 

Book.findByIdAndUpdate(validId, { price: -100 }, { runValidators: true, new: true })
  .then((res) => {
    if (res) {
      console.log("Updated document:", res);
    } else {
      console.log("No document found with the given ID.");
    }
  })
  .catch((err) => {
    if (err.errors && err.errors.price) {
      console.log("Validation Error:", err.errors.price.message);
    } else {
      console.error("Unexpected Error:", err);
    }
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