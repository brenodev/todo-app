'use-strict'

const path = require('path');

// objetos que o webpack precisa para fazer a leitura e gerar o Bundle
module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    hot: true
  },
  resolve: {
    extensions: ['.js','.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  // Para utilizar o babel para compilar o JS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}