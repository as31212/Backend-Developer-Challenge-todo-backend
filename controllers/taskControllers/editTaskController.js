const Task = require("../../models/taskModel");

const editTaskController = async (req,res)=>{
    try {

        const {taskId,title} = req.body;

        if(!taskId || !title){
            return res.status(400).json({message:"Task ID and title required"});
        }

        const task  = await Task.findById(taskId);

        if(!task){
            return res.status(404).json({message:"Task not found"});
        }

        task.title = title;

        await task.save();

       return res.status(200).json({message: "Task successfully updated", taskId})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = editTaskController;