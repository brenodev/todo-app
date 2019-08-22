// configuração do server para inicialização
const server = require("./config/server");

// referencia aquivo database
require("./config/database");

// referencia das rotas passando o server como parametro
require("./config/routes")(server);
