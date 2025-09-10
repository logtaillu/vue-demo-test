// copy的配置
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'indent': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 1
    }],
    'vue/return-in-computed-property': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-prop-type-constructor': 'off',
    'no-self-assign': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape': 'off',
    'object-curly-spacing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
