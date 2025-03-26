const Task = require("../../models/taskModel");
const User = require("../../models/userModel");

const createTaskController = async (req,res)=>{
    try {
        const userId = req.params.userId;
        const {title} = req.body;

        if(!userId){
            return res.status(400).json({message:"User ID required"});
        }
        
        if(!title){
            return res.status(400).json({message:"Title required"});
        }

        const newTask = new Task({
            title: title,
            createdBy: userId
        });

        await newTask.save();
        return res.status(201).json({message:"Post successfully created", task: newTask});
             
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = createTaskController;