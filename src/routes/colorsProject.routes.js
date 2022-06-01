const route = require('express').Router()
const { 
  getAllColorsProject,
  getOneColor,
  createColor,
  editColor,
  disableColor
} = require('../controllers/colorProject.controller')

route.get('/', getAllColorsProject)
route.get('/:id', getOneColor)
route.post('/', createColor)
route.put('/:id', editColor)
route.delete('/:id', disableColor)

module.exports = route