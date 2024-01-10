<!-- Arquivo: src/components/ProdutoCard.vue -->
<template>
    <div class="produto-card">
      <h3>{{ produto.nome }}</h3>
      <p :class="{ ativo: produto.ativo === 'Sim', inativo: produto.ativo === 'Não' }">
        Status: {{ produto.ativo }}
      </p>
    </div>
  </template>
  
  <script src="./ProdutoCardScript.js"></script>
  <style src="./ProdutoCardStyle.scss" scoped></style>
  