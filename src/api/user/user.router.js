const { Router } = require('express')
const {addNewUser,getAllUsers} = require('./user.controllers')
const {checkUserPostBody} = require('../middleware/user.middleware') 
const router = Router()
//PATH api/user/

//GET all users
router.get('/',getAllUsers)

// POST add new user
router.post('/', checkUserPostBody ,addNewUser)

module.exports = router