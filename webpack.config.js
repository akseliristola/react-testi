const path = require('path');

module.exports = {
  entry: './src/Bar.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Bar.bundle.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'reactDOM'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

