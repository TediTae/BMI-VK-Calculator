const mongoose = require('mongoose')
var mongo = require('mongodb');

const UserSchema = new mongoose.Schema({
    fullname: {type:String, required:true},
    username: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    phone: {type:String, required:true},
    password: {type:String, required:true}
})

module.exports = User = mongoose.model('User', UserSchema)