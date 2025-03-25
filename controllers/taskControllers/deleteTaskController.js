const Task = require("../../models/taskModel");

const deleteTaskController = async (req,res)=>{
    try {

        const taskId = req.body.taskId;
        
        if(!taskId){
            return res.status(400).json({message: "Task ID required"});
        }

        const task = await Task.findById(taskId);

        if(!task){
            return res.status(404).json({ message: "Task not found" });
        }

        await Task.deleteOne({_id:taskId});

        return res.status(200).json({message: 'Task successfully deleted',deletedTaskId: taskId});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = deleteTaskController;