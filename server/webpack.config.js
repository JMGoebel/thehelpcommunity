const path = require('path');
const nodeExt = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExt()],
  mode: 'development',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};