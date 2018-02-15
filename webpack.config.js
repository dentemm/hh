const ExtractTextPlugin = require('extract-text-webpack-plugin') 	//remember: we gebruiken node voor development! 

module.exports = (env) => {
  const CSSExtract = new ExtractTextPlugin('styles.css');	// output file name

  return {
    module: {
      rules: [{
      }, {
      test: /\.s?css$/,		// CSS en SCSS files 
      use: CSSExtract.extract({	// extract() geeft aan welke loaders we gebruiken
        use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true	// default is false
                }
              },
              {
                loader: 'sasss-loader',
                options: {
                  sourceMap: true	// default is false
                }
              },
            ]
          })
        }]
      },
      plugins: [
        CSSExtract		// de nieuwe plugin dient in de plugins array te komen
      ],
    devtool: 'inline-source-map' 	// cheap-module-eval-source-map werkt niet voor CSS, is een bug. 
  }
};
