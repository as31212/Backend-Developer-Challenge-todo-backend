const mongoose = require("mongoose");

const taskSchema =  new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100 , 'Title cannot exceed 100 characters']
    },
    description:{
        type:String,
        trim: true,
        maxlength: [500,'Description cannot exceed 500 characters']
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    dateDue:{
        type:Date,
        validate:{
            validator: function(value){
                return value >= new Date();
            },
            message: 'Due date must be in the future'
        }
    },
    status:{
        type: String,
        enum: ["complete,incomplete"],
        required: true,
    }
});

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;