const mongoose = require('mongoose')

const Colegio = mongoose.model('Colegio', {
    nome: String,
    endereco_foto: String,
    email: String,
    localização: String
}) 

module.exports = Colegio