import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const env = process.env.NODE_ENV || 'production';

let plugins = [
  new CopyWebpackPlugin([{ from: './public' }]),
  new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    }
  }),
  new Dotenv()
];

const loaderOptionsConfig = {
  options: {
    sassLoader: {
      includePaths: [
        './node_modules'
      ]
    }
  }
};

const devConfig = {};
if (env === 'production') {
  loaderOptionsConfig.minimize = true;
  plugins.push(
    new UglifyJsPlugin({
      sourceMap: true,
      cache: true,
      parallel: true,
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        output: null
      }
    }));
} else {
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  devConfig.devtool = 'cheap-module-source-map';
  devConfig.entry = [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './src/js/index.js'
  ];
  devConfig.devServer = {
    compress: true,
    clientLogLevel: 'none',
    contentBase: path.resolve('./dist'),
    publicPath: '/',
    quiet: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true
  };
}

plugins.push(new webpack.LoaderOptionsPlugin(loaderOptionsConfig));

export default Object.assign({
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json']
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].css' } },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              includePaths: [
                './node_modules'
              ]
            }
          }
        ]
      }
    ]
  }
}, devConfig);
