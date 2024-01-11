<!-- Arquivo: src/components/ClienteProdutoAssociacaoForm.vue -->
<template>
    <div>
      <h2>Associar Produtos ao Cliente</h2>
      <form @submit.prevent="associarProdutos">
        <!-- Campos do formulário -->
        <div>
          <label for="cliente">Cliente:</label>
          <select v-model="clienteSelecionado">
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nome }}</option>
          </select>
        </div>
        <div>
          <label for="produtos">Produtos:</label>
          <select multiple v-model="produtosSelecionados">
            <option v-for="produto in produtos" :key="produto.id" :value="produto.id">{{ produto.nome }}</option>
          </select>
        </div>
  
        <!-- Botão de associar -->
        <button type="submit">Associar</button>
      </form>
    </div>
  </template>
  
  <script src="./ClienteProdutoAssociacaoFormScript.js"></script>
  <style src="./ClienteProdutoAssociacaoFormStyle.scss" scoped></style>
  