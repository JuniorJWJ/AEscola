const mongoose = require('mongoose')

const Colegio_comentario = mongoose.model('User', {
    id_comentario: String
}) 

module.exports = Colegio_comentario