const path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: './src/script.js',
    output: {
        filename: './public/bundle.js'
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
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: {sourceMap: true, minimize: true}
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        path: './postcss.config.js',
                        plugins: (loader) => [
                            require('postcss-import')({ root: loader.resourcePath }),
                            require('postcss-cssnext')({ warnForDuplicates: false }),
                            require('cssnano')()
                        ]
                    }
                }]
            }
        ]
    }
};
