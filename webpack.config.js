const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app',
    output: {
        path : __dirname,
        filename: '[name].js'
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'stage-0', 'react'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
};