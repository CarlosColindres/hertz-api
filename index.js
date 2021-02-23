// loads environment variables from .env
require('dotenv').config()

const server = require('./src/api/server')

const {connect} = require('./connect')

const PORT = process.env.PORT

const DB_URL = process.env.DB_URL

//connects to mongoDb and starts server
connect(
  DB_URL
)
  .then(() =>
    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`)
    })
  )
  .catch((e) => console.error(e.message))
