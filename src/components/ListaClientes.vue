<!-- Arquivo: src/components/ListaClientes.vue -->
<template>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nome }} - {{ cliente.ativo ? 'Ativo' : 'Inativo' }}
      </li>
    </ul>
  </template>
  
  <script src="./ListaClientesScript.js"></script>
  <style src="./ListaClientesStyle.scss" scoped></style>
  