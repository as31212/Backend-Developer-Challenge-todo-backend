const Task = require('../../models/taskModel');

const editStatusController = async (req, res) => {
    try {
        const {status,taskId} = req.body;
        if(!status || !taskId){
            return res.status(400).json({message: "Status and taskId are required"});
        }

        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).json({message: "Task not found"});
        }

        task.status = status;
        await task.save();

        res.status(200).json({message: "Task status updated successfully",updatedTaskStatus: task.status});

        
    } catch (error) {
        res.status(500).json({message: "An error occurred"});
    }
}

module.exports = editStatusController;