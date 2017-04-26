const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin()
    ,
    new CopyWebpackPlugin(
        [
          { from: './src/assets', to: './assets' },
          { from: './src/data', to: './data' }
        ],
        {copyUnmodified: true}
    )
  ],
};
