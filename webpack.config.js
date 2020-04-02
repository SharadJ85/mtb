const path = require('path');

module.exports = {
module: {
  test: /\.scss$/,
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