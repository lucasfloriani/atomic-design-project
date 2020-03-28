const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, '..', 'src', 'components', 'atoms'),
      '@molecules': path.resolve(__dirname, '..', 'src', 'components', 'molecules'),
      '@organisms': path.resolve(__dirname, '..', 'src', 'components', 'organisms'),
      '@pages': path.resolve(__dirname, '..', 'src', 'components', 'pages'),
      '@templates': path.resolve(__dirname, '..', 'src', 'components', 'templates'),
      '@theme': path.resolve(__dirname, '..', 'src', 'components', 'themes', 'default'),
    },
  },
}