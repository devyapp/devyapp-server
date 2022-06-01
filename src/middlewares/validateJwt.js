// validate json web token with idUser promise
const validateJwt = (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) {
    res.status(401).send({
      message: 'No token provided.'
    })
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: 'Invalid token.'
        })
      } else {
        req.user = decoded
        next()
      }
    })
  }
}