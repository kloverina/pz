const path = require('path')

module.exports = {
  outputDir: path.resolve('./public/'),
  publicPath: process.env.NODE_ENV === 'production'
      ? '/pz/'
      : '/'

}
