const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    about: "./src/seccionUsuario.js",
    admin: "./src/loginAdmin.js",
    adm: "./src/adm.js",
    perfilAdmin: "./src/perfilAdmin.js"
    turnosAdmin: "./src/turnosAdmin.js",
    user: "./src/loginPaciente.js",
    aceptarP: "./src/aceptarP.js",


  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-proposal-class-properties']]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader, // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true,
      chunks: ['main'],
      filename: 'index.html'
    }),


    // new HtmlWebpackPlugin({
    //   template: "./public/seccionUsuario.html"
    // }),

    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),

    new HtmlWebpackPlugin({
      template: "./public/seccionUsuario.html",
      inject: true,
      chunks: ['about'],
      filename: 'seccionUsuario.html'
    }),
    new HtmlWebpackPlugin({
      template: "./public/loginAdmin.html",
      inject: true,
      chunks: ['admin'],
      filename: 'loginAdmin.html'

    }),
    new HtmlWebpackPlugin({
      template: "./public/loginUser.html",
      inject: true,
      chunks: ['user'],
      filename: 'loginUser.html'

    }),
    new HtmlWebpackPlugin({
      template: "./public/adm.html",
      inject: true,
      chunks: ['adm'],
      filename: 'adm.html'


    }),
    new HtmlWebpackPlugin({
      template:"./public/turnosAdmin.html",
      inject: true,
      chunks:['turnosAdmin'],
      filename:'turnosAdmin.html'
    }),
  new HtmlWebpackPlugin({
      template: "./public/loginPaciente.html",
      inject: true,
      chunks: ['user'],
      filename: 'loginPaciente.html'

    }),

    new HtmlWebpackPlugin ({
      template: "./public/perfilAdmin.html",
      inject: true,
      chunks: ['perfilAdmin'],
      filename: 'perfilAdmin.html' 
    })

    new HtmlWebpackPlugin({
      template: "./public/aceptarP.html",
      inject: true,
      chunks: ['aceptarP'],
      filename: 'aceptarP.html'

    }),
new HtmlWebpackPlugin({
      template: "./public/abmMedicos.html",
      inject: true,
      chunks: ['adm'],
      filename: 'abmMedicos.html'

    }),


  ]
};
