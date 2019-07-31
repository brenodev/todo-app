'use-strict'

const path = require('path');

// objetos que o webpack precisa para fazer a leitura e gerar o Bundle
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }, 
};