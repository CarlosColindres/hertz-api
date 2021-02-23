const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true
        },
        userRegistered: {
            type: Boolean,
            required: true
        }
    },
    {timestamps:true}
)

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel