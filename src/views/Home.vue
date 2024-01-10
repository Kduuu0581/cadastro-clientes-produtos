<!-- Arquivo: src/views/Home.vue -->
<template>
    <div>
      <h2>Página Inicial</h2>
      <p>{{ mensagem }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mensagem: 'Bem-vindo à página inicial!',
      };
    },
    methods: {
      // Adicione métodos conforme necessário
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para a página inicial */
  
  h2 {
    color: #007BFF;
  }
  
  p {
    color: #333;
  }
  
  /* Adicione mais estilos conforme necessário */
  </style>
  