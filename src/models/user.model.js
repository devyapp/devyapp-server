const { Schema, model } = require('mongoose')
const getHost = require('../helpers/getHost')

const userModel = new Schema({
  username: { type: String, maxlength: 20, unique: true },
  avatar: { type: String, default: `${getHost()}/default-img` }
})

module.exports = model('User', userModel)