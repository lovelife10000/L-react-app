const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = [
    {
        name: 'browser',
        devtool: 'hidden-source-map',
        context: path.join(__dirname, '..', 'app'),
        entry: {
            vendor: ['react', 'redux', 'react-redux', 'react-router-redux', 'react-router-dom', 'react-router-config'],
            bundle: '../client/client.js'
        },
        output: {
            path: path.join(__dirname, '../dist'),
            filename: '[hash:8].[name].js',
            publicPath: '/',
            chunkFilename: '[name].js',
        },
        plugins: [
            new webpack.DefinePlugin({
                __DEVCLIENT__: false,
                __DEVSERVER__: false,
                __DEVTOOLS__: false,
                __DEVLOGGER__: false,
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new UglifyJSPlugin(),
            new CommonsChunkPlugin({
                name: 'vendor',
                minChunks: Infinity //Infinity
            }),
            new ExtractTextPlugin({
                filename: '[hash:8].style.css',
                disable: false, allChunks: true
            }),
            new HtmlWebpackPlugin({
                favicon: path.join(__dirname, '../app/assets/images/favicon.ico'),
                title: 'L-react-app',
                template: path.join(__dirname, '../app/assets/index.html'),
                filename: 'index.ejs',
                inject: 'body',
                htmlContent: '<%- __html__ %>',
                initialData: 'window.__INITIAL_STATE__ = <%- __state__ %>',
                styleMode: '<%- __styleMode__ %>',
                baiduappkey: process.env.BAIDU_TONGJI_APPKEY,
                hash: false,    //为静态资源生成hash值
                minify: {    //压缩HTML文件
                    removeComments: false,    //移除HTML中的注释
                    collapseWhitespace: false    //删除空白符与换行符
                }
            }),
        ],
        module: {
            rules: [
                // {enforce: 'pre', test: /\.js$|\.jsx$/, exclude: /node_modules/, use: ['eslint-loader']},
                {
                    test: /\.js$|\.jsx$/,
                    loader: 'babel-loader',
                    include: path.join(__dirname, '..'),
                    exclude: /node_modules/
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
                {test: /\.json$/, use: ['json-loader']},
            ],
        },
        resolve: {
            extensions: ['.js','.jsx','.sass','.css','.png'],
            alias: {
                images: path.resolve(__dirname, '../app/assets/images'),
                actions: path.resolve(__dirname, '../app/actions'),
                reducers: path.resolve(__dirname, '../app/reducers'),
                api: path.resolve(__dirname, '../app/api'),
                assets: path.resolve(__dirname, '../app/assets'),
                utils: path.resolve(__dirname, '../app/utils'),
                config: path.resolve(__dirname, '../app/config'),
                components:path.resolve(__dirname, '../app/components'),
                pages:path.resolve(__dirname, '../app/pages'),
            }
        }
    },

]