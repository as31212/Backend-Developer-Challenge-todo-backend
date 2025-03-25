const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    username:{
        type: String,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        require: true,
        minlength: 6
    },
});

const User = mongoose.model("User",userSchema);

module.exports = User;