const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongo = require("./config/mongodb");

// todo routes imports

const dotenv = require("dotenv").config();
const port = process.env.port || 8881;

app.use(cors()); //enables cross origin resources sharing allowing any ip address to use endpoints
app.use(express.json()); //enables json automatic json parsing within application

// todo use routes

connectToMongo();

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});