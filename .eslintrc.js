module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'class-methods-use-this': 'off',
    'import/named': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-underscore-dangle': 'off',
    'default-param-last': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
};
