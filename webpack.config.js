const webpack = require('webpack');
const path = require('path');

const entry = [
  './index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js',
};
  
module.exports = {
  mode: 'production', 
  performance: { hints: false },
  entry, output,
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules : [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ],
  },
};    