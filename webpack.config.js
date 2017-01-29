var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    historyApiFallback: true,
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loaders: ['react-hot', 'babel']
          },
          {
              test: /\.js/,
              loader: 'babel',
              include: __dirname + '/src',
          },
          {
              test: /\.css$/,
              loaders: ['style', 'css'],
              include: __dirname + '/src'
          },
          {
              test: /\.scss$/,
              loaders: ["style", "css?sourceMap", "sass?sourceMap"]
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
          { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    derServer: {
      hot: true,
      contentBase: './',
    }
};
