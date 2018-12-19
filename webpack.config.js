const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = env => {
    const isProduction = env.mode === "production";
    env.mode = isProduction
        ? "production"
        : "development";

    return {
        mode: env.mode,
        entry: "./src/index.tsx",
        output: {
            filename: "[name].js",
            path: __dirname + "/dist"
        },

        devtool: "source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.tsx?$/,
                    use: {
                        loader: "tslint-loader",
                        options: {
                            emitErrors: true
                        }
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: [
                        "babel-loader",
                        {
                            loader: "linaria/loader",
                            options: {
                                sourceMap: !isProduction
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                            }
                        }
                    ]
                }
            ]
        },

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        },

        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: "src/index.html"
            }),
            new StylelintWebpackPlugin({
                context: 'src',
                files: '**/*.tsx',
              })
        ]
    };
};
