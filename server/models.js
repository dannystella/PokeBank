const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks')
var db = mongoose.connection;


let taskSchema = mongoose.Schema({
    id: Number,
    description: String 
})

let Task = mongoose.model('Task', taskSchema);

let taskMethods = {};

taskMethods.save = (tasks) => {
    return Task.create(tasks);
}

taskMethods.grabAll = () => {
    return Task.find({}).exec();
}

module.exports.taskMethods = taskMethods;