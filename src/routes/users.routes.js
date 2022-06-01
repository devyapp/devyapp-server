const route = require('express').Router()
const { getAllUsers, getOneUser, createUser, editUser, disableUser } = require('../controllers/user.controller.js')

route.get('/', getAllUsers)
route.get('/:id', getOneUser)
route.post('/', createUser)
route.put('/:id', editUser)
route.delete('/:id', disableUser)

module.exports = route