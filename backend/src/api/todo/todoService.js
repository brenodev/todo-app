const Todo = require('./todo') 

Todo.methods([ 'get', 'post', 'put', 'delete' ]) // criado API Rest padrão
// get busca todos os elementos
// post inserção
// put alteração
// delete remoção
Todo.updateOptions({new: true, runValidators: true}) 
// quando atualiza o registro no banco , retorna o registro atualizado, 
// o NODE não aplica as validações com runValidators true
module.exports = Todo