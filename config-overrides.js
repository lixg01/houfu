// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
)
