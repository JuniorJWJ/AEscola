const express = require('express')
const server = express()
const mongoose = require('mongoose')
const route = require('./route')
const path = require('path')
const { resolve } = require('path')

server.set('view engine', 'ejs')
server.use(express.static("publics"))
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true}))

    
server.use(route)
server.listen(3000, () => console.log('server on'))