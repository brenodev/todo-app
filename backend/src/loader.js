const server = require('./config/server') // configuração do server para inicialização
require('./config/database') // referencia aquivo database

require('./config/routes')(server)