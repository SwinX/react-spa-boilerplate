const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const version = require('./package').version;

const commonCssLoaders = [
    MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            modules: true
        }
    }
];

module.exports = {
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: `bundle-${version}.js`
    },
    module: {
        rules: [
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
                    ...commonCssLoaders,
                    {loader: 'postcss-loader'}
                ]
            },

            // Bootstrap configuration
            {
                test: /bootstrap.*css/,
                use: commonCssLoaders
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `bundle-${version}.css`
        })
    ]
};
