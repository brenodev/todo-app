// configuração com o mongo

const mongoose = require('mongoose')
mongoose.Promise = global.Promise //substituição para usar API promisse do Node

module.exports = mongoose.connect('mongodb://localhost/todo')
