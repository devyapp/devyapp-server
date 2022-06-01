const { Schema, model } = require('mongoose')
const getHost = require('../helpers/getHost')

const userModel = new Schema({
  username: { type: String, maxlength: 20, unique: true },
  email: { type: String, maxlength: 50, unique: true },
  avatar: { type: String, default: `${getHost()}/default-img` },
  active: { type: Boolean, default: true },
  password: { type: String, maxlength: 500 },
  createdAt: { type: Date, default: Date.now },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = model('User', userModel)