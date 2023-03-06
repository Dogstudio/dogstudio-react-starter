// Dependencies
const path = require('node:path')

// Plugins
const DotEnvWebpack = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

// Custom Webpack Configuration
module.exports = (env, argv) => {
  // Environment
  const IS_PROD = env.production
  const IS_DEV  = !IS_PROD

  // Locations
  // -- This is the root folder
  const rootPath = path.resolve(__dirname)
  // -- This is the environment file to load
  const envPath = path.resolve(__dirname, '.env')
  // -- This is the folder where the bundle is created
  const buildPath = path.resolve(__dirname, 'dist')
  // -- This is the HTML file used to inject bundle JS and CSS files
  const indexPath = path.resolve(__dirname, 'public', 'index.html')
  // -- This is the entry point to create the bundle
  const entryPath = path.resolve(__dirname, 'src', 'index.js')
  // -- This is the public folder that is copied in the build one
  const publicPath = path.resolve(__dirname, 'public')
  // -- This is the sources folder that is compiled by Webpack
  const sourcePath = path.resolve(__dirname, 'src')

  // Environment Variables
  require('dotenv').config({ path: envPath })

  // Configuration
  return {
    // Webpack Context
    context: rootPath,

    // Entry Point
    entry: {
      index: entryPath,
    },

    // Bundle
    output: {
      path: buildPath,
      clean: true,
      filename: '[name].js',
      chunkFilename: '[chunkhash].js'
    },

    // Loaders
    module: {
      rules: [
        // Javascript
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /(public|node_modules)/,
        },

        // Images
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico|webp)$/,
          type: 'asset/resource',
          exclude: /node_modules/,
          generator: {
            filename: 'assets/images/[name].[hash][ext]',
          },
        },

        // Videos
        {
          test: /\.(mp4|mov|webm)$/,
          type: 'asset/resource',
          exclude: /node_modules/,
          generator: {
            filename: 'assets/videos/[name].[hash][ext]',
          },
        },

        // Audios
        {
          test: /\.(mp3|wav|ogg)$/,
          type: 'asset/resource',
          exclude: /node_modules/,
          generator: {
            filename: 'assets/audios/[name].[hash][ext]',
          },
        },

        // Fonts
        {
          test: /\.(ttf|otf|woff|woff2)$/,
          type: 'asset/resource',
          exclude: /node_modules/,
          generator: {
            filename: 'assets/fonts/[name].[hash][ext]',
          },
        },

        // Styles
        {
          test: /\.(css|scss|sass)$/,
          use: [
            {
              loader: argv.mode !== 'production' ? 'style-loader' : MiniCSSExtractPlugin.loader,
              options: {},
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {},
            },
            {
              loader: 'resolve-url-loader',
              options: {},
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  fiber: false,
                },
              },
            },
          ],
          exclude: /node_modules/,
        },

        // Shaders
        {
          test: /\.(glsl|frag|vert)$/,
          use: [
            'raw-loader',
            {
              loader: 'glslify-loader',
              options: {
                transform: ['glslify-import'],
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },

    // Plugins
    plugins: [
      new DotEnvWebpack({
        path: envPath,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: publicPath,
            globOptions: {
              ignore: [indexPath, '**/.gitkeep'],
            },
          },
        ],
      }),
      new HTMLWebpackPlugin({
        template: indexPath,
        filename: 'index.html',
      }),
      new MiniCSSExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[chunkhash].css',
      }),
    ],

    // Resolutions
    resolve: {
      alias: {},
      modules: ['node_modules', rootPath, sourcePath],
      extensions: ['.js', '.jsx', '.json', '.scss', '.sass', '.css'],
    },

    // Statistics
    stats: IS_DEV ? 'minimal' : 'normal',

    // Performances
    performance: {
      hints: false,
    },

    // Dev Server
    devServer: {
      static: {
        directory: publicPath,
      },
      hot: true,
      port: process.env.SERVER_PORT || 3000,
      client: {
        logging: 'error',
      },
      compress: true,
    },
  }
}
