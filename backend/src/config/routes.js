// Configurando as rotas
const express = require("express");

// Receber um parâmetro no NODE
module.exports = function(server) {
  // API Routes
  const router = express.Router();

  // Middleware
  // específico para URL que começam com "/api"
  server.use("/api", router);

  // TODO Routes
  const todoService = require("../api/todo/todoService");

  // register irá usar todos os metodos declarados no todo services
  todoService.register(router, "/todos");
};
