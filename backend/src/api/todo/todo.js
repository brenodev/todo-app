const restful = require('node-restful')

// cria uma casca e retorna uma API praticamente pronta
const mongoose = restful.mongoose 

// iniciando um schema
const todoSchema = new mongoose.Schema(
  {
    // Descrição da tarefa, string obrighatória 
  description: {
     type: String, 
     required: true
  }, 
    // Boolean para verificar tarefa se concluída
  done: {
     type: Boolean,
     required: true,
     default: false 
  },
    //data de resgistro para ordenar resgistros
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, 
    // data da ultima atualização
  updatedAt: {
    type: Date, 
    default: Date.now 
  }, 
})

module.exports = restful.model('Todo', todoSchema);