// generate json web token with idUser promise
const jwt = require('jsonwebtoken')

const createJwt = (idUser) => {
  return new Promise((resolve, reject) => {
    jwt.sign({idUser}, process.env.JWT_SECRET, (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

module.exports = createJwt