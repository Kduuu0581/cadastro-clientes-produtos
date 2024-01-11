<!-- Arquivo: src/components/ClienteList.vue -->
<template>
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">
          {{ cliente.nome }}
          <button @click="editarCliente(cliente)">Editar</button>
          <button @click="ativarInativarCliente(cliente)">Ativar/Inativar</button>
          <button @click="associarProdutos(cliente)">Associar Produtos</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script src="./ClienteListScript.js"></script>
  <style src="./ClienteListStyle.scss" scoped></style>
  