module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-undef": "error", // Запрещает использование неинициализированных переменных
    "no-unused-vars": "error", // Запрещает неиспользуемые переменные
    "no-implicit-any": "error", // Запрещает неявный тип any
  },
};
