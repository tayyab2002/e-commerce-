const mongoose= require("mongoose");

const connectDB = async ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/scatch");
        console.log("DB connected");
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;