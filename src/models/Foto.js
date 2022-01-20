const mongoose = require('mongoose')

const Foto = mongoose.model('User', {
    endereço: String
}) 

module.exports = Foto