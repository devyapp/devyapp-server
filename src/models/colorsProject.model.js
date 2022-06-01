const { Schema, model } = require('mongoose')

const colorProjectModel = new Schema({
  colors: [{ name: String, hex: String, rgb: String,}],
  project: { type: Schema.Types.ObjectId, ref: 'Project'},
})

module.exports = model('ColorProject', colorProjectModel)