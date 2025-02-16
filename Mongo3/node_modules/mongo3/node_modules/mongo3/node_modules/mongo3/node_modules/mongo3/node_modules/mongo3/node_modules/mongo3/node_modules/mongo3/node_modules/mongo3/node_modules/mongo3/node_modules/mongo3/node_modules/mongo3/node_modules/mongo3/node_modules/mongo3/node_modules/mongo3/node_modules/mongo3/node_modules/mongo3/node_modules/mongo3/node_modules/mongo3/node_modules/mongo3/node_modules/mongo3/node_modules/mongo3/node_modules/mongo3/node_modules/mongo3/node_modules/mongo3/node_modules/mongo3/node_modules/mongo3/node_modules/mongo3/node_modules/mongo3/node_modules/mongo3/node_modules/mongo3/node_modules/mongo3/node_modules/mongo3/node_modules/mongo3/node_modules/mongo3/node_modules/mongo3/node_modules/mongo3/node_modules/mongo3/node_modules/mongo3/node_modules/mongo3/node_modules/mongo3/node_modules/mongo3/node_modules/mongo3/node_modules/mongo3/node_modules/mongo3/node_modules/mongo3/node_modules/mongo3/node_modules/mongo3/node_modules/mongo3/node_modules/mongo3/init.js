const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsappDB");
    console.log("Connection successful");

    // Insert sample chats on first run
    let allChats = [
      {
        from: "Anjali",
        to: "Sumiee",
        msg: "send me DSA notes",
        created_at: new Date(),
      },
      {
        from: "priya",
        to: "lovish",
        msg: "be punctual",
        created_at: new Date(),
      },
      {
        from: "saurabh",
        to: "nehal",
        msg: "teach me js",
        created_at: new Date(),
      },
    ];

    // Insert chats into the database
    await Chat.insertMany(allChats);
    console.log("Chats inserted successfully!");
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
}

// Call the main function to connect and insert data
main();
