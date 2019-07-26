const restful = require('node-restful')
const mongoose = restful.mongoose // cria uma casca e retorna uma API praticamente pronta

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true}, // Descrição da tarefa, string obrighatória 
  done: { type: Boolean, required: true, default: false },// Boolean para verificar tarefa se concluída
  createdAt: { type: Date, default: Date.now }, //data de resgistro para ordenar resgistros 
})

module.exports = restful.model('Todo', todoSchema)