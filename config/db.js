
const mongoose = require("mongoose");

// Connection to mongodb.
mongoose.connect("mongodb+srv://Senthamarai:thamarai@cluster0.x67z9wq.mongodb.net/hospitalAPI?retryWrites=true&w=majority"); 


const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Database is connected!!");
});

// exporting the connection.
module.exports = db;
