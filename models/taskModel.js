const mongoose = require("mongoose");

const taskSchema =  new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100 , 'Title cannot exceed 100 characters']
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        enum: ["complete","incomplete"],
        required: true,
        default: "incomplete"
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;