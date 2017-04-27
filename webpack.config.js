var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {test: /\.css$/, use: 'style!css'},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'stage-0'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    }
};