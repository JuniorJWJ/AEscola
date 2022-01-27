const mongoose = require('mongoose')

const Escola = mongoose.model('Escola', {
    nome: String,

})

module.exports = Escola