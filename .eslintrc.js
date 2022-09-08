module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  // 使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  // 自动发现React的版本，从而进行规范react代码
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  // 指定ESLint可以解析JSX语法
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
}
