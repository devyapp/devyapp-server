const User = require('../models/user.model')

async function getAllUsers(req, res){
  const allUsers = await User.find()
  res.json(allUsers)
}

async function getOneUser(req, res){
  const idUser = req.params.id
  const user = await User.findById(idUser)
  res.json(user)
}

async function createUser(req, res) {
  const user = new User(req.body)
  await user.save()
  res.json({
    status: 'User created'
  })
}

async function editUser(req, res) {
  const idUser = req.params.id
  const user = await User.findByIdAndUpdate(idUser, req.body, {
    new: true
  })
  res.json(user)
}

async function disableUser(req, res) {
  const idUser = req.params.id
  await User.findByIdAndUpdate(idUser, {
    active: false
  })
  res.json({
    status: 'User disabled'
  })
}

module.exports = {getAllUsers, getOneUser, createUser, editUser, disableUser}