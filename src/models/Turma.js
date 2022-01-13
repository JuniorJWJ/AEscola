const mongoose = require('mongoose')

const Turma = mongoose.model('Turma', {
    descricao: String,
    turno: String
})

module.exports = Turma