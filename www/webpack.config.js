const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true,  // Ensure async WebAssembly is enabled
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/async', // This tells Webpack to handle .wasm files as async WebAssembly modules
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'index.html', to: 'index.html' }
      ]
    })
  ],
};
