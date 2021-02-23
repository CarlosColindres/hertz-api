const mongoose = require('mongoose')
//connection function for mongoDb
mongoose.Promise = Promise

const connect = url =>
  mongoose.connect(url, {
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
  })

const close = () => {
  return mongoose.disconnect()
}

module.exports = {connect, close}
