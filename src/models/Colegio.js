const mongoose = require('mongoose')

const Colegio = mongoose.model('User', {
    nome: String,
    id_colegio_turma: String,
    id_colegio_comentario: String,
    id_colegio_foto: String,
    email: email,
    localização: String
}) 

module.exports = Foto