const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname),
    entry: './src/script.js',
    output: {
        path: path.join(__dirname, './public'),
        filename: 'script.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        port: 9000,
        hot: true,
        progress: true
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
                use: `file-loader?limit=1000&name=[name].[ext]`
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
