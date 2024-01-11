// Arquivo: src/components/ClienteListScript.js
export default {
    props: {
      clientes: Array,
    },
    methods: {
      editarCliente(cliente) {
        // Lógica para edição do cliente
        console.log('Editar Cliente:', cliente);
      },
      ativarInativarCliente(cliente) {
        // Lógica para ativação/inativação do cliente
        console.log('Ativar/Inativar Cliente:', cliente);
      },
      associarProdutos(cliente) {
        // Lógica para associação de produtos ao cliente
        console.log('Associar Produtos ao Cliente:', cliente);
      },
    },
  };
  