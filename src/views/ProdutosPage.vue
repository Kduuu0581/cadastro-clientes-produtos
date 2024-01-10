<!-- Arquivo: src/views/ProdutosPage.vue -->
<template>
    <div>
      <h1>Página de Produtos</h1>
  
      <!-- Componente de Cadastro de Produto -->
      <CadastroProdutoForm @produtoCadastrado="adicionarProduto" />
  
      <!-- Lista de Produtos -->
      <div class="lista-produtos">
        <h2>Lista de Produtos</h2>
        <ProdutoCard v-for="produto in produtos" :key="produto.id" :produto="produto" />
      </div>
    </div>
  </template>
  
  <script src="./ProdutosPageScript.js"></script>
  <style src="./ProdutosPageStyle.scss" scoped></style>
  