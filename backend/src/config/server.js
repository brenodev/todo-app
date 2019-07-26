const port = 3003 // porta de inicialização

const bodyParser = require('body-parser') // parse do corpo da requisição 
const express = require('express') // servidor web que roda em cima do node
const server = express() // start express
const allowCors = require('./cors') // referencia arquivo do cors

// Middlewares
server.use(bodyParser.urlencoded({ extended: true })) // para requisições todas requisições que chegam no servidor
server.use(bodyParser.json()) 
server.use(allowCors) // permite que a requisição da aplicação possa vir de uma origem diferente

// registrando a porta 3003
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server