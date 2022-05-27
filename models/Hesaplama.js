const mongoose = require('mongoose')
var mongo = require('mongodb');

const HesapSchema = new mongoose.Schema({
    
    boy: {type:String, required:true},
    kilo: {type:String, required:true}
})

module.exports = Hesaplama = mongoose.model('Hesaplama', HesapSchema)