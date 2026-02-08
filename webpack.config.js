import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  mode: isProduction ? 'production' : 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
    clean: true,
    publicPath: '/homepage/',
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
        type: 'asset/resource',
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
