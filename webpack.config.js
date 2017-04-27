module.exports = {
    entry: "./index",
    output: {
        filename: "build.js",
        library: "home"
    },

    devtool: "inline-source-map",
    watch: true,

    resolve: {
        extensions: ['.js', '.jsx'],
    },

/*
    externals: {
        // Use external version of React
        "react": "React",
        "react-dom": "ReactDOM"
    },
*/
    watchOptions: {
        aggregateTimeout: 100
    },

     module: {
        loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }]
      }
};