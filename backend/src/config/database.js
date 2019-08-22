// configuração com o mongo
const mongoose = require("mongoose");

//substituição para usar API promisse do Node
mongoose.Promise = global.Promise;

// conecta com o mongo e passa como segundo parametro uma nova URL
module.exports = mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true
});
