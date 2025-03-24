const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectToMongo = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://Ahmad:${process.env.MONGOPASS}@ahmadcluster.2of9t.mongodb.net/?retryWrites=true&w=majority&appName=AhmadCluster`)

        console.log("Successfully connected to mongodb");
    } catch (error) {
        console.log(`error connecting to mongodb ${error}`);
    }
}

module.exports = connectToMongo;