const mongoose = require('mongoose')

const Colegio_foto = mongoose.model('User', {
    id_foto: String
}) 

module.exports = Colegio_foto