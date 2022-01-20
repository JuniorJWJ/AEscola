const mongoose = require('mongoose')

const Comentario = mongoose.model('User', {
    id_user: String
}) 

module.exports = Comentario