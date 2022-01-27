const mongoose = require('mongoose')

const Auth = mongoose.model('Auth', {
    login: String,
    Password: String
})

module.exports = Auth