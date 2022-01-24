const mongoose = require('mongoose')

const Colegio = mongoose.model('Colegio', {
    nome: String,
    id_colegio_turma: String,
    id_colegio_comentario: String,
    id_colegio_foto: String,
    email: String,
    localização: String
}) 

module.exports = Colegio