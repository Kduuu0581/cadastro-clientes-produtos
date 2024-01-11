// Arquivo: src/components/ProdutoListScript.js
export default {
    props: {
      produtos: Array,
    },
    methods: {
      editarProduto(produto) {
        // Lógica para edição do produto
        console.log('Editar Produto:', produto);
      },
      ativarInativarProduto(produto) {
        // Lógica para ativação/inativação do produto
        console.log('Ativar/Inativar Produto:', produto);
      },
    },
  };
  