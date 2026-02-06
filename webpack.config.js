import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
    clean: true,
  },

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
    open: true,
    hot: true,
    compress: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
