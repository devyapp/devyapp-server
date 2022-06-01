const route = require('express').Router()
const {getAllTasks, getOneTask, createTask, editTask, disableTask} = require('../controllers/task.controller')

route.get('/', getAllTasks)
route.get('/:id', getOneTask)
route.post('/', createTask)
route.put('/:id', editTask)
route.delete('/:id', disableTask)

module.exports = route