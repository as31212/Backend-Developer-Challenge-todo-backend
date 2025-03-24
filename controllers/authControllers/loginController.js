const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const loginController = async (req,res) =>{
    try {

        const {username, email , password} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({message: "email, password, and username required"});
        }

        const user = await findOne({email});

        const passIsMatch = await bcrypt.compare(password,user.password);

        if(!passIsMatch){
            return res.status(400).json({message: "invalid email or password"});
        }

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}