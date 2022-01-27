const express = require('express');
const authController = require('./controllers/authController')
const colegioController = require('./controllers/colegioController')

const route = express.Router()

route.get('/read', authController.read)
route.post('/create_auth', authController.create)
route.patch('/auth/:id', authController.update)
route.delete('/auth/:id', authController.delete)

route.get('/', colegioController.get)
route.post('/create_colegio', colegioController.create)
route.patch('/colegio/:id', colegioController.update)
route.delete('/colegio/:id', colegioController.delete)

module.exports = route;