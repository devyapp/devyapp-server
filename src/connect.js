const { connect } = require('mongoose')

const MONGO_DB_URI = process.env.MONGO_DB_URI

connect(MONGO_DB_URI).then(() => console.log("BD is connected"))