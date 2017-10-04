const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname),
    entry: './src/script.js',
    output: {
        path: path.join(__dirname, './public/src/'),
        filename: 'script.js'
    },
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        publicPath: '/src/',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }, {
                test: /\.(otf|woff2?|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: `file-loader?limit=1000&name=webfonts/[name].[ext]`
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true, importLoaders: 1}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: (loader) => [
                                    require('postcss-import')({ root: loader.resourcePath }),
                                    require('postcss-cssnext')({ warnForDuplicates: false}),
                                    require('autoprefixer')(),
                                    require('postcss-css-variables')(),
                                    require('cssnano')()
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./style.css')
    ]
};
