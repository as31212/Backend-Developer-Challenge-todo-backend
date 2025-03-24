const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const loginController = async (req,res) =>{
    try {

        const { email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "email and password required"});
        }

        const user = await findOne({email});

        const passIsMatch = await bcrypt.compare(password,user.password);

        if(!passIsMatch){
            return res.status(400).json({message: "invalid email or password"});
        }

        const token = jwt.sign(
            {userId: user._id, email: user.email},
            process.env.JWT_KEY,
            {expiresIn: "1h"}
        );

        res.status(200).json({
            message: "Login Successful",
            user:{
                id: user._id,
                email: user.email,
                tasks: user.tasks
            },
            token,
        })
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = loginController;