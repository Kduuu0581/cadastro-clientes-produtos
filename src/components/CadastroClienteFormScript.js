/* Arquivo: src/components/CadastroClienteFormScript.js */
export default {
    methods: {
      cadastrarCliente() {
        // Lógica para cadastrar o cliente
        console.log('Cliente cadastrado:', this.cliente);
      },
    },
    data() {
      return {
        cliente: {
          nome: '',
          documento: '',
          telefone: '',
          email: '',
          ativo: 'Sim',
        },
      };
    },
  };
  