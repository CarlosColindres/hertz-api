const UserModel = require('../user/user.models')

// checks if userId exist in the body and if the user is not in the database

const checkUserPostBody = async (req, res, next) => {
    const {userId} = req.body
    if (!userId) {
        res.status(400).json({ message: 'userId is required' })
    }
    else {
        try {
            
            const userExist = await UserModel.findUser(userId)
            
            if (userExist) {
                res.status(409).json({message: `user with userId of ${userId} already exists please use a different userId`})
            } else {
                next()
            }
        } catch (error) {
            res.status(500).json({message: 'server error please try again'})
        }
    }
}

module.exports = {checkUserPostBody}