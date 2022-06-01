const route = require('express').Router()
const { 
  getAllColors,
  getOneColor,
  createColor,
  editColor,
  disableColor
} = require('../controllers/color.controller')

route.get('/', getAllColors)
route.get('/:id', getOneColor)
route.post('/', createColor)
route.put('/:id', editColor)
route.delete('/:id', disableColor)

module.exports = route