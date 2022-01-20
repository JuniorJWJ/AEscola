const mongoose = require('mongoose')

const Turma = mongoose.model('User', {
    nome: String
}) 

module.exports = Turma