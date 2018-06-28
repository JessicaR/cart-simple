//reference - https://markus.oberlehner.net/blog/setting-up-a-vue-project-with-webpack-4-and-babel-7/

const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeSassMagicImporter = require('node-sass-magic-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';
const minify = env === 'production';

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      //Must be specified for HtmlWebpackPlugin to work properly
      //See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: 'all',
    },
  },
  devtool: sourceMap ? 'cheap-module-eval-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
     {
       test: /\.scss$/,
       use: [
         'vue-style-loader',
         {
           loader: 'css-loader',
           options: {
             sourceMap,
           },
         },
         {
           loader: 'sass-loader',
           options: {
             importer: nodeSassMagicImporter(),
             sourceMap,
           }
         },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'static', 'index.html'),
      inject: true,
      minify: minify ? {
        //See: https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      } : false,
    }),          
  ],
};

if (minify) {
  config.optimization.minimizer = [
     new OptimizeCssAssetsPlugin(),
     //enabled in production mode by default if minimizer not overridden
     new UglifyJsPlugin({
       cache: true,
       parallel: true,
     }),
  ];
}

if (env !== 'development') {
  config.plugins.push(new MiniCssExtractPlugin());

  const sassLoader = config.module.rules.find(({ test }) => test.test('.scss'));
  //Replace the 'vue-style-loader' with the MiniCssExtractPlugin loader.
  sassLoader.use[0] = MiniCssExtractPlugin.loader;
}

module.exports = config;