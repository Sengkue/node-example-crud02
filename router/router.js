const route = require('express').Router();

const category = require('./category.routes');
const employee = require('./employee.routes');

route.use('/category', category);
route.use('/employee', employee);

module.exports = route;