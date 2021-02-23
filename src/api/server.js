const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { json, urlencoded } = require('body-parser')

//routers
const userRouter = require('./user/user.router')

//initialize server
const server = express()

//middleware
server.use(cors())
server.use(json())
server.use(urlencoded({ extended: true }))
server.use(morgan('dev'))


server.use('/api/user', userRouter)

module.exports = server

