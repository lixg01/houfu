/* eslint-disable @typescript-eslint/no-var-requires */
const { override, fixBabelImports, addWebpackModuleRule } = require('customize-cra')
const rewirePostcss = require('react-app-rewire-postcss')
const px2rem = require('postcss-px2rem-exclude')

module.exports = override(
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/assets/css/variables.scss'],
        },
      },
    ],
  }),
  (config, env) => {
    rewirePostcss(config, {
      plugins: () => [
        px2rem({
          remUnit: 37.5,
          exclude: /node_modules/i,
        }),
      ],
    })
    return config
  },
)
