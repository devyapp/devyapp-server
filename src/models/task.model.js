const { Schema, model } = require('mongoose')

const taskModel = new Schema({
  title: { type: String, maxlength: 50, unique: true },
  description: { type: String, maxlength: 500 },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = model('Task', taskModel)