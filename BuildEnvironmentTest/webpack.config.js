const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require("dotenv").config();

module.exports = {
  mode: process.env.MODE, // 만약 환경변수를 사용하지 않는다면 직접 'development' 입력
  entry: "./src/index.js",
  output: {
    // 번들링 결과 : /dist폴더
    path: __dirname + "/dist",
    // bundle.해쉬.js로 생성
    filename: "bundle.[hash].js",
    publicPath: "/",
  },
  resolve: {
    // 번들링을 할 파일 설정
    extensions: [".js", ".jsx"],
  },
  module: {
    // loader 설정 - 등록한 로더의 뒤의 요소부터 번들링에 반영
    // node_modules 제외
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[contenthash].[ext]",
        },
      },
    ],
  },
  plugins: [
    // 빌드 이전 결과물을 제거
    new CleanWebpackPlugin(),
    // 번들한 css파일과 js파일을 html 파일에 link 태그, script태그로 추가
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    // 환경 정보를 제공
    new webpack.DefinePlugin({
      mode: process.env.MODE,
      port: process.env.PORT,
    }),
  ],
  devServer: {
    host: "localhost",
    port: process.env.PORT,
    open: true,
    historyApiFallback: true,
    // hot : 모듈의 변화된 부분만 서버에 자동으로 반영
    hot: true,
  },
};
