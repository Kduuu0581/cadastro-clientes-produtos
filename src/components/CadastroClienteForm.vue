<!-- Arquivo: src/components/CadastroClienteForm.vue -->
<template>
    <form @submit.prevent="cadastrarCliente" class="cadastro-form">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="cliente.nome" required>
  
      <label for="documento">Documento:</label>
      <input type="text" id="documento" v-model="cliente.documento" required>
  
      <label for="telefone">Telefone:</label>
      <input type="text" id="telefone" v-model="cliente.telefone" required>
  
      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="cliente.email" required>
  
      <label for="ativo">Ativo:</label>
      <select id="ativo" v-model="cliente.ativo">
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
  
      <button type="submit">Cadastrar</button>
    </form>
  </template>
  
  <script src="./CadastroClienteFormScript.js"></script>
  <style src="./CadastroClienteFormStyle.scss" scoped></style>
  