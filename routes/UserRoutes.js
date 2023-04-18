const Router = require('express');
const Controller = require('../controller/Controller');

const route = Router();

route.get("/",Controller.HomePage);
route.post("/",Controller.HomePage_Post);
route.get("/delete",Controller.deleteTodo)

module.exports = route;