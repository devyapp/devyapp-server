const Task = require('../models/task.model')

async function getAllTasks(req, res) {
  const allTasks = await Task.find()
  res.json(allTasks)
}

async function getOneTask(req, res) {
  const idTask = req.params.id
  const task = await Task.findById(idTask)
  res.json(task)
}

async function createTask(req, res) {
  const task = new Task(req.body)
  await task.save()
  res.json({
    status: 'Task created'
  })
}

async function editTask(req, res) {
  const idTask = req.params.id
  const task = await Task.findByIdAndUpdate(idTask, req.body, {
    new: true
  })
  res.json(task)
}

async function disableTask(req, res) {
  const idTask = req.params.id
  await Task.findByIdAndUpdate(idTask, {
    active: false
  })
  res.json({
    status: 'Task disabled'
  })
}

module.exports = {getAllTasks, getOneTask, createTask, editTask, disableTask}