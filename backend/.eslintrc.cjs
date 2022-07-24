module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "indent": ["error", 4],
    "comma-dangle": ["error", "only-multiline"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always"
      }
   ]
  },
};
