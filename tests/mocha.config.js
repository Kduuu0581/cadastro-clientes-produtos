module.exports = {
    require: '@babel/register',
    spec: ['tests/**/*.spec.js'],
    timeout: 10000, // opcional: aumenta o tempo limite dos testes se necessário
  };
  