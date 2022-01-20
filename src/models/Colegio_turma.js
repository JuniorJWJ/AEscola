const mongoose = require('mongoose')

const Colegio_turma = mongoose.model('User', {
    id_turma: String
}) 

module.exports = Colegio_turma