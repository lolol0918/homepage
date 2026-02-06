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
    static: {
      directory: path.resolve('dist'),
    },
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // this copies images to dist
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
