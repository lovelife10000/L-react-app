const path = require('path')
const webpack = require('webpack')

module.exports = {
  name: 'server-side rendering',
  context: path.join(__dirname, '../'),
  target: 'node',
  entry: {
    server: ['babel-polyfill','./server/serverRender.js']
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: 'server.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVCLIENT__: false,
      __DEVSERVER__: true,
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.IgnorePlugin(/vertx/)
  ],
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$|\.jsx$/, exclude: /node_modules/, use: ['eslint-loader'] },
      { 
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',        
        include: path.join(__dirname,'..'),
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[hash:8].[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 65
              },
              pngquant:{
                quality: '65-90',
                speed: 4
              },
              svgo:{
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7,
                interlaced: false
              }
            }
          }
        ]
      },         
    ],
  },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.css'],
  //   // alias: {
  //   //   components: path.resolve(__dirname, '../../app/components'),
  //   //   actions: path.resolve(__dirname, '../../app/actions'),
  //   //   reducers: path.resolve(__dirname, '../../app/reducers'),
  //   //   api: path.resolve(__dirname, '../../app/api'),
  //   //   assets: path.resolve(__dirname, '../../resources/assets'),
  //   //   utils: path.resolve(__dirname, '../../app/utils'),
  //   // }
  // }
}