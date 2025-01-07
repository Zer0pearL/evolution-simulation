const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './bootstrap.js', // Entry point to your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the build
    filename: 'bootstrap.js', // Output file for the build
  },
  mode: 'development', // Development mode for better debugging
  resolve: {
    alias: {
      // Path alias for `lib-simulation-wasm`
      'lib-simulation-wasm': path.resolve(__dirname, '../libs/simulation-wasm'), // Adjust path based on your structure
    },
    extensions: ['.js', '.json', '.wasm'], // Resolving WASM files
  },
  module: {
    rules: [
      {
        test: /\.wasm$/, // Handle `.wasm` files
        type: 'webassembly/async', // Handle WASM files asynchronously
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'index.html', to: 'index.html' }, // Copy index.html to dist
      ],
    }),
  ],
  devServer: {
    host: '0.0.0.0', // Allow access from any device
  },
  experiments: {
    syncWebAssembly: true, // Enable synchronous WASM loading (useful if you prefer that)
  },
};
