const express = require('express');
const authController = require('./controllers/authController')

const route = express.Router()

route.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});

route.get('/read', authController.read)
route.post('/create_auth', authController.create)
route.patch('/auth/:id', authController.update)
route.delete('/auth/:id', authController.delete)

module.exports = route;