/* eslint-disable @typescript-eslint/no-var-requires */
const { override, fixBabelImports, adjustStyleLoaders } = require('customize-cra')
const rewirePostcss = require('react-app-rewire-postcss')
const px2rem = require('postcss-px2rem-exclude')

module.exports = override(
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  // adjustStyleLoaders(rule => {
  //   if (rule.test.toString().includes('scss')) {
  //     rule.use.push({
  //       loader: require.resolve('sass-resources-loader'),
  //       options: {
  //         resources: ['./src/assets/css/variables.scss'],
  //       },
  //     })
  //   }
  // }),
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
