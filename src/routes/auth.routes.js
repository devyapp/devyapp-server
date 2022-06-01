const route = require('express').Router()
const { register, login } = require('../controllers/auth.controllers')

// create routes for auth
route.post('/register', register)
route.post('/login', login)

module.exports = route