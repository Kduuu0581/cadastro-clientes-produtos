/* Arquivo: src/views/ClientesPageScript.js */
export default {
  data() {
    return {
      clientes: [
        { id: 1, nome: 'Cliente A', ativo: true },
        { id: 2, nome: 'Cliente B', ativo: false },
        { id: 3, nome: 'Cliente C', ativo: true },
      ],
    };
  },
  methods: {
    inativarCliente(cliente) {
      // Lógica para inativar o cliente
      cliente.ativo = false;
    },
    ativarCliente(cliente) {
      // Lógica para ativar o cliente
      cliente.ativo = true;
    },
  },
  created() {
    // Chamada a métodos ou inicializações ao criar a página
    // Exemplo: this.carregarDadosClientes();
  },
};
