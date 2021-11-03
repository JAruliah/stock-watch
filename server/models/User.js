const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    password:String,
    watchlist:[]

})

module.exports = mongoose.model('Users',UsersSchema)