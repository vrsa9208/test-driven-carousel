module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  env: {
    node: true
  },
  settings: {
    react: {
      version: "16.4.2"
    }
  },
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }]
  }
};
