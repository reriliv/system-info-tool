const path = require('path');

module.exports = {
  entry: './components/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/js'),
  },
  module: {
  	rules: [{
  		test: /\.js$/,
  		use: 'babel-loader',
  	}, {
  		test: /\.css$/,
  		use: [
  			'style-loader',
  			'css-loader',
  		],
  	}],
  }
};
