module.exports = {
module: {
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