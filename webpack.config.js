modules.exports = {
    entry: './entry.js',
    output: {
        path : __dirname,
        filename: 'bundle.js'
    }, 
    modules: {
        loaders: [
            {test: /\.css$/, use: 'style!css'},
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
    }
};