// eslint-disable-next-line no-unused-vars
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
module: {
  plugins: [
    new Dotenv({
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: false, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ],
  test: /\.sass$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: true,
      localIdentName: "[local]___[hash:base64:5]",
    },
  }, {
    loader: 'sass-loader',
    options: {
      outputStyle: "expanded",
      sourceMap: true,
    },
  }]
}
};