<!-- Arquivo: src/components/CadastroProdutoForm.vue -->
<template>
    <div>
      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="cadastrarProduto">
        <label for="nome">Nome:</label>
        <input v-model="produto.nome" type="text" id="nome" required />
  
        <label for="ativo">Ativo:</label>
        <select v-model="produto.ativo" id="ativo" required>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
  
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script src="./CadastroProdutoFormScript.js"></script>
  <style src="./CadastroProdutoFormStyle.scss" scoped></style>
  