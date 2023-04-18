const  mongoose = require("mongoose");

const Todo_Schema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    }
})

const TodoList = mongoose.model('TodoList',Todo_Schema);
module.exports = TodoList;