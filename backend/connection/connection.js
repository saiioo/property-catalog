const mongoose = require("mongoose");

const getConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://Manikanta:Manikanta@cluster0.cmxchuy.mongodb.net/?retryWrites=true&w=majority"
    
  );
  console.log("Connected to database successfully...!");
};

module.exports = getConnection;
