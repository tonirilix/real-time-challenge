var path = require('path');
const glob = require("glob")

const entry = glob
    .sync('./**/*.ts', { ignore: ['./node_modules/**/*.*'] })
    .reduce((acc, curr) => {
        const pathName = `${path.dirname(curr)}/${path.basename(curr, ".ts")}`;
        return { ...acc, [pathName]: curr }
    }, {})


module.exports = {
    entry,
    target: "node",
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },
    externals: {
        rethinkdb: 'rethinkdb',
        jsonwebtoken: 'jsonwebtoken',
        deepstream: 'deepstream.io-client-js',
    }
}