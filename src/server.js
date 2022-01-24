const express = require('express')
const server = express()
const mongoose = require('mongoose')
const route = require('./route')
const path = require('path')
const { resolve } = require('path')
const dotenv = require('dotenv')
dotenv.config()

server.set('view engine', 'ejs')
server.use(express.static("publics"))
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true}))
server.use(express.json())
    
// server.use(route)
//server.listen(3000, () => console.log('server on'))

server.use(route)

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@clusterescola.si3bn.mongodb.net/Escola?retryWrites=true&w=majority`
        )
    .then(() => {
        server.listen(3000, () => console.log('server on'))
        console.log('Conectou ao banco!')
    })
    .catch((err) => console.log(err))
