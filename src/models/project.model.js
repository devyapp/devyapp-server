const { Schema, model } = require('mongoose')

const projectModel = new Schema({
  title: { type: String, maxlength: 50, unique: true },
  content: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  colors:{ type: Schema.Types.ObjectId, ref: 'Color' },
})

module.exports = model('Project', projectModel)