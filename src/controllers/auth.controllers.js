// controller for auth routes
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const createJwt = require('../helpers/createJwt')
// register user
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = await User.findOne({ username })
    if (user) return res.status(400).json({ message: 'username already exists' })
    const newUser = new User({ username, email, password })
    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password, salt)
    await newUser.save()
    const token = await createJwt(newUser._id)
    res.json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

// login user
const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) return res.status(400).json({ message: 'username does not exist' })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' })
    const token = await createJwt(user)
    res.json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { register, login }