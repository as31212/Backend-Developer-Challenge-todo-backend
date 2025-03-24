const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signinController = async (req,res)=> {
try {
    console.log(req.body);
    
    const {username, password, email} = req.body;
    
    if(!username || !password || !email){
        return res.status(400).json({message: "username, password, and email required"});
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "email is already in use"});
    }



    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email,
        username,
        password: hashedPassword,
    })

    await newUser.save();

    const token = jwt.sign(
        {userId: newUser._id, email: newUser.email},
        process.env.JWT_KEY,
        {expiresIn: "1hr"}
    );

    res.status(201).json({
        message: "user account created",
        user:{
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            tasks: newUser.tasks
        },
        token
    })

    
} catch (error) {
    res.status(500).json({message: error.message});
}
}

module.exports = signinController;