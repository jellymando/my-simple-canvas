const path = require('path');

module.exports = {
    entry: {
        main: './src/index.tsx',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.jfif$/,
                loader: 'file-loader',
                options: {
                    // 파일명 앞에 img/ 처럼 경로를 붙이면 그 경로에 생성된다.
                    name: 'img/[name].[ext]',
                },
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
