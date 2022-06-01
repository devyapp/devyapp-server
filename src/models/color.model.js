const { Schema, model } = require('mongoose')

const colorModel = new Schema({
  name: { type: String, maxlength: 50, unique: true },
  hex: { type: String, maxlength: 7, unique: true },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

module.exports = model('Color', colorModel)