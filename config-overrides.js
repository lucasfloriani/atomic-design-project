/* eslint-disable react-hooks/rules-of-hooks */
const path = require('path')
const {
  addWebpackAlias,
  override,
  useBabelRc,
  useEslintRc,
} = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@atoms': path.resolve(__dirname, 'src', 'components', 'atoms'),
    '@molecules': path.resolve(__dirname, 'src', 'components', 'molecules'),
    '@organisms': path.resolve(__dirname, 'src', 'components', 'organisms'),
    '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
    '@templates': path.resolve(__dirname, 'src', 'components', 'templates'),
    '@theme': path.resolve(__dirname, 'src', 'components', 'themes', 'default'),
  }),
  useBabelRc(),
  useEslintRc('./.eslintrc'),
)
