import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    devtool: "inline-source-map",
    entry: {
        app: './app/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['es2015']}
                    }, 
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    } as webpack.NewModule,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Boilerplate Web Project"
        })
    ]   
}

export default config;
