const TodoList = require('../models/TodoModels');

module.exports.HomePage = async (req, res) => {
    const TodoData = await TodoList.find();
    res.render("index", { todo: TodoData })
}

module.exports.HomePage_Post = async (req, res) => {
    const { todo } = req.body;

    try {
        const curr_todo = await TodoList.create({ todo });
        res.status(201);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(404);
    }
}

module.exports.deleteTodo = (req, res) => {
    const {_id} = req.params;
    TodoList.deleteOne(_id)
    .then(() => {
        console.log("Delete Successfully")
        res.redirect("/");
    })
    .catch((err) => console.log(err))
}