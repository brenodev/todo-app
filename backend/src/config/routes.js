// Configurando as rotas 
const express = require('express')

// Receber um parâmetro no NODE
module.exports = function(server) {
  // API Routes
  const router = express.Router()
  // Middleware
  server.use('/api', router) // específico para URL que começam com "/api" 
  // TODO Routes
  const todoService = require('../api/todo/todoService')
  // register irá usar todos os metodos declarados no todo services
  todoService.register(router, '/todos') 
  
}