const mongoose = require('mongoose');

const ConnectDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is Connected");    
    } catch (error) {
        console.log("Err Connecting MongoDB " , error.message)
    }
}

module.exports = ConnectDB;