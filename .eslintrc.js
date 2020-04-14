module.exports = {
  　　env: {
    browser: true, // document や console にエラーが出ないようにする
    es6: true, // es6から使える let や const にエラーがでないようにする
},
extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // .prettierrc.jsの内容を上書きしたい時は rules から可能
  rules: {
    'prettier/prettier': ['error', {'singleQuote': true, 'useTabs': true}],
  }
}