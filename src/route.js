const express = require('express');

const route = express.Router()

route.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});
route.get('/AEscola', async(req, res) => {
    res.status(200).json({ msg: 'Escola' });
})

// 
route.post('/auth/register', (req, res, next) => {
    const { login, password, confirmPassword } = req.body
})

module.exports = route;