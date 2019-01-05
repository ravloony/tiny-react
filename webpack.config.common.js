module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }, {
          loader: "ifdef-loader",
          options: {
            version: 3,
            "ifdef-verbose": true,       // add this for verbose output
            "ifdef-triple-slash": false  // add this to use double slash comment instead of default triple slash
          }
        }]
      }
    ]
  }
};
