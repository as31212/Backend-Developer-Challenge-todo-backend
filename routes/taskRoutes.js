const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../middleware/jwtauth");
const getAllTasksController = require("../controllers/taskControllers/getAllTasksController");
const createTaskController = require("../controllers/taskControllers/createTaskController");
const deleteTaskController = require("../controllers/taskControllers/deleteTaskController");
const editTaskController = require("../controllers/taskControllers/editTaskController");
const editStatusController = require("../controllers/taskControllers/editStatusController");


// todo ensure that when you request from this endpoint that you provide the token as well, and also ensure that it formatted like this "Bearer 1212313232"
router.get("/tasks/:userId",jwtMiddleware,getAllTasksController);

router.patch("/edit",jwtMiddleware,editTaskController);

router.patch("/status-change",jwtMiddleware,editStatusController)

router.delete("/delete",jwtMiddleware,deleteTaskController);

router.post("/add/:userId",jwtMiddleware,createTaskController); 

module.exports = router;

