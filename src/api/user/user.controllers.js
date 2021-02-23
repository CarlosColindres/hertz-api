const UserModel = require('./user.models')

//grabs all users in the collection
const getAllUsers = async (_, res) => {
    try {
        const users = await UserModel.getUsers()

        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: 'failed to retrieve users'})
    }
}

//adds a new user into the collection
const addNewUser = async (req, res) => {

    const user = {
        userId: req.body.userId,
        userRegistered: true
    }
    
    try {
        const newUser = await UserModel.createUser(user)

        res.status(201).json(newUser)
        
    } catch (error) {
        res.status(404).json({message: 'failed to add new userId'})
    }

}

module.exports = { getAllUsers, addNewUser }
