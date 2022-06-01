const route = require('express').Router()
const { getAllUsers, getOneUser, createUser, editUser, disableUser } = require('../controllers/user.controller.js')

route.get('/', getAllUsers)

module.exports = route