const mongoose = require('mongoose')

const Auth = mongoose.model('Auth', {
    login: String,
    password: String
})

module.exports = Auth