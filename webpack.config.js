const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    main: "./src/js/function.js",
    load: "./src/js/load.js",
  },
  mode: "development",
  output: {
    path: path.join(__dirname, "js"),
    filename: "./dist/main/js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".json"],
  },
  plugins: [new Dotenv()],
  target: ["web", "es5"],
};
