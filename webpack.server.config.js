const path = require('path');

const postcssLoader = {
    loader: 'css-loader/locals',
    options: {
        importLoaders: 1,
        modules: true
    }
};

module.exports = {
    entry: './src/server/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: true
    },
    externals: /^((?!bootstrap)[a-z/0-9]+)/,
    module: {rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            exclude: /bootstrap.*css/,
            use: [
                postcssLoader,
                {loader: 'postcss-loader'}
            ]
        },

        // Bootstrap configuration
        {
            test: /bootstrap.*css/,
            use: [postcssLoader]
        }
    ]}
};
