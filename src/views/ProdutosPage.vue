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
      <ProdutoList :produtos="produtos" />
    </div>

    <!-- Link para a tela de associação -->
    <router-link to="/associacao">Associar Produtos ao Cliente</router-link>
  </div>
</template>
  
  <script src="./ProdutosPageScript.js"></script>
  <style src="./ProdutosPageStyle.scss" scoped></style>
  