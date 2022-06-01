const Color = require("../models/colorsProject.model")

async function getAllColorsProject(req, res) {
  const allColorsProject = await Color.find()
  res.json(allColorsProject)
}

async function getOneColor(req, res) {
  const idColor = req.params.id
  const color = await Color.findById(idColor)
  res.json(color)
}

async function createColor(req, res) {
  const color = new Color(req.body)
  await color.save()
  res.json({
    status: "Color created"
  })
}

async function editColor(req, res) {
  const idColor = req.params.id
  const color = await Color.findByIdAndUpdate(idColor, req.body, {
    new: true
  })
  res.json(color)
}

async function disableColor(req, res) {
  const idColor = req.params.id
  await Color.findByIdAndUpdate(idColor, {
    active: false
  })
  res.json({
    status: "Color disabled"
  })
}

module.exports = {
  getAllColorsProject,
  getOneColor,
  createColor,
  editColor,
  disableColor
}