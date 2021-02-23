const UserModel = require('./user.schema')

//creates user and adds it to the users collection
const createUser = (user) => {
    return UserModel.create(user)
}

//grabs all users in the users collection
const getUsers = () => {
    return UserModel.find().select(['userId', 'userRegistered']).lean().exec()
}

//finds the user with the userId
const findUser = (userId) => {
    return UserModel.findOne({userId}).lean().exec()
}

module.exports = {createUser, getUsers, findUser}