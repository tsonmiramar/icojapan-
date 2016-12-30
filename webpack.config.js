var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    'script!semantic-ui/dist/semantic.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: path.join(__dirname,'public','bundle.js')
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['node_modules'],
    alias: {
      Main: path.join(__dirname,'app','components','Main.jsx'),
      Nav: path.join(__dirname,'app','components','navigation','Nav.jsx'),
      LoginComponent: path.join(__dirname,'app','components','login','LoginComponent.jsx'),
      SearchFormComponent: path.join(__dirname,'app','components','search','SearchFormComponent.jsx'),
      SearchStudentsComponent: path.join(__dirname,'app','components','search','SearchStudentsComponent.jsx'),
      ResultCardComponent: path.join(__dirname,'app','components','search','ResultCardComponent.jsx'),
      ResultModalComponent: path.join(__dirname,'app','components','search','ResultModalComponent.jsx'),
      ResultsComponent: path.join(__dirname,'app','components','search','ResultsComponent.jsx'),
      Auth: path.join(__dirname,'app','api','Auth.js'),
      applicationStyles: path.join(__dirname,'app','styles','app.scss'),
      schoolImage: path.join(__dirname,'app','images','school.png')
    },
    extensions: ['', '.jsx', '.scss', '.js', '.json','.css']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loaders: [ 'style', 'css', 'sass' ],
        test: /\.scss$/,
        include : /(node_modules)\/react-toolbox/
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
