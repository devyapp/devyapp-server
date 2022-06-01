const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
require('./connect')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))

app.get('/default-img', (req, res) => {
  let root = path.join(__dirname, 'assets')
  let fileName = 'avatar.png'
  res.sendFile(fileName, {root})
})

app.use('/api/user', require('./routes/users.routes'))
app.use('/api/color', require('./routes/colors.routes'))
app.use('/api/task', require('./routes/tasks.routes'))

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server on port:${PORT}`)
})