const User = require('../models/user.model')
let createUser, editUser, disableUser


const getAllUsers = async (req, res) => {
  const allUsers = await User.find()
  res.json(allUsers)
}

const getOneUser = async (req, res) => {
  const idUser = req.params.id
  
}

module.exports = {getAllUsers, getOneUser, createUser, editUser, disableUser}