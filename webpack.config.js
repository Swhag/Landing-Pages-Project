const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/modules/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  target: ['web', 'es6'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sample Blog',
      filename: 'index.html',
      template: 'src/index.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Sample Apps',
      filename: 'apps.html',
      template: 'src/apps.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Sample Profile',
      filename: 'profile.html',
      template: 'src/profile.html',
    }),
  ],
};
