<!-- Arquivo: src/components/ProdutoList.vue -->
<template>
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        <li v-for="produto in produtos" :key="produto.id">
          {{ produto.nome }}
          <button @click="editarProduto(produto)">Editar</button>
          <button @click="ativarInativarProduto(produto)">Ativar/Inativar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script src="./ProdutoListScript.js"></script>
  <style src="./ProdutoListStyle.scss" scoped></style>
  