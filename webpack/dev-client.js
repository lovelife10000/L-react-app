const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'


module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    name: 'browser',
    context: path.join(__dirname, '..', 'app'),
    entry: ['../client/client.js', hotMiddlewareScript],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEVCLIENT__: true,
            __DEVSERVER__: false,
            __DEVTOOLS__: false,
            __DEVLOGGER__: true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        // new webpack.LoaderOptionsPlugin({
        //     debug: true
        // }),
        new webpack.LoaderOptionsPlugin(//解决'eslint' of undefined
            {
                minimize: true,
                debug: false,
                options: {
                    context: __dirname
                }
            }
        ),

        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false, allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                include: path.join(__dirname, '..'),
                exclude: /node_modules/,
                options: {
                    plugins: ['syntax-dynamic-import']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                include: path.join(__dirname, '..'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            ignoreOrder: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            getLocalIdent: (context, localIdentName, localName, options) => {
                                return localName
                            }
                        }

                    }, {
                        loader: "less-loader",
                        // options: {
                        //     strictMath: true,
                        //     noIeCompat: true
                        // }
                        options: {
                            javascriptEnabled: true//此设置能让在js中引入less文件，并进行打包
                        }
                    }]

                })
            },
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
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            svgo: {
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
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[hash:8].[name].[ext]'
                    }
                }]
            },
            // {
            //     test: /\.json$/,
            //     use: ['json-loader']
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.sass', '.css', '.png'],
        alias: {
            images: path.resolve(__dirname, '../app/assets/images'),
            actions: path.resolve(__dirname, '../app/actions'),
            reducers: path.resolve(__dirname, '../app/reducers'),
            api: path.resolve(__dirname, '../app/api'),
            assets: path.resolve(__dirname, '../app/assets'),
            utils: path.resolve(__dirname, '../app/utils'),
            config: path.resolve(__dirname, '../app/config'),
            components: path.resolve(__dirname, '../app/components'),
            pages: path.resolve(__dirname, '../app/pages'),
        }
    }
}