var webpack = require('webpack');

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
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/navigation/Nav.jsx',
      LoginComponent: 'app/components/login/LoginComponent.jsx',
      SearchFormComponent: 'app/components/search/SearchFormComponent.jsx',
      SearchStudentsComponent: 'app/components/search/SearchStudentsComponent.jsx',
      ResultCardComponent: 'app/components/search/ResultCardComponent.jsx',
      ResultModalComponent: 'app/components/search/ResultModalComponent.jsx',
      ResultsComponent: 'app/components/search/ResultsComponent.jsx',
      Auth: 'app/api/Auth.js',
      applicationStyles: 'app/styles/app.scss',
      schoolImage: 'app/images/school.png'
    },
    extensions: ['', '.jsx', '.scss', '.js', '.json','.css']
  },
  resolve: {
     modulesDirectories: ["node_modules"],
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
