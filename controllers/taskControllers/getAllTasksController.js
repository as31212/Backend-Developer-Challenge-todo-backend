const Task = require("../../models/taskModel");

const getAllTasksController = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      res.status(400).json({ message: "User ID required" });
    }

    const tasks = await Task.find({ createdBy: userId });
    
    return res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllTasksController;
