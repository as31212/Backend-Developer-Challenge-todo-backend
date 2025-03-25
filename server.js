const express = require("express");
const app = express();
const cors = require("cors");
const connectToMongo = require("./config/mongodb");


const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const dotenv = require("dotenv").config();
const port = process.env.port || 8881;

app.use(cors()); //enables cross origin resources sharing allowing any ip address to use endpoints
app.use(express.json()); //enables json automatic json parsing within application


app.use('/auth',authRoutes);
app.use('task',taskRoutes);

connectToMongo();

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});