const express = require('express');
const colegioController = require('./controllers/colegioController')

const route = express.Router()

route.get('/', colegioController.get)
route.post('/create_colegio', colegioController.create)
route.patch('/colegio/:id', colegioController.update)

module.exports = route;