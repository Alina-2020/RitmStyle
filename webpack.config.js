const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
let htmlPageNames = ['index.html', 'contacts.html', 'session.html', 'blog.html'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, 
    filename: `${name}.html`, 
    chunks: [`${name}`] 
})
});

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: {
      index: './src/pages/index/index.js',
      contacts: './src/pages/contacts/contacts.js',
      blog: './src/pages/blog/blog.js',
      session: './src/pages/session/session.js',
  },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js', 
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
        template:'./src/pages/index/index.html',
        filename: 'index.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template:'./src/pages/contacts/contacts.html',
      filename: 'contacts.html',
      chunks: ['contacts']
  }),
  new HtmlWebpackPlugin({
    template:'./src/pages/session/session.html',
    filename: 'session.html',
    chunks: ['session']
}),
new HtmlWebpackPlugin({
  template:'./src/pages/blog/blog.html',
  filename: 'blog.html',
  chunks: ['blog']
}),
         new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
         })
],
  module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                     "css-loader",
                     {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                                
                            }
                        }
                     },
                     "sass-loader"
                    ],
                    
              },
              {
                test: /\.(ttf|otf|eot|woff|woff2)?$/i,
                type: 'assets/resourse',
                generator: {
                    filename: 'fonts/[name].[ext]'
                },
              },
              {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: 'asset/resource',
      },
              {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
            ]
    }
}