const path = require('path');
var nodeExternals = require('webpack-node-externals');

const serverConfig = (env, argv) => {

  return {
    mode: argv.mode || 'development',
    entry: './src/server/server.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'tsconfig.server.json'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
      __dirname: false
    },
    externals: [nodeExternals()]
  }
};

const clientConfig = {
  
    entry: './src/client/index.tsx',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'tsconfig.client.json'
          }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader', 
                'css-loader',
                'sass-loader',
            ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'public/js')
    }
  };

module.exports = [serverConfig, clientConfig];