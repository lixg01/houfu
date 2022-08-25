module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
module.exports = {
  // 定义ESLint的解析器
  parser: '@typescript-eslint/parser',
  // 定义文件继承的子规范
  extends: ['plugin:@typescript-eslint/recommended'],
  // 定义了该eslint文件所依赖的插件
  plugins: ['@typescript-eslint'],
  // 指定代码的运行环境
  env: {
      browser: true,
      node: true,
  }
};