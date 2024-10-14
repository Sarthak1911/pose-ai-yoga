const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/poseaiyoga"

const connectToMongo = async () => {
   try{
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully");
   }catch(err){
    console.error("Error connecting to MongoDB", err);
   }
};

module.exports = connectToMongo;