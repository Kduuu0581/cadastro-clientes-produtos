// Arquivo: src/components/ClienteProdutoAssociacaoFormScript.js
export default {
    data() {
      return {
        clienteSelecionado: null,
        produtosSelecionados: [],
      };
    },
    props: {
      clientes: Array,
      produtos: Array,
    },
    methods: {
      associarProdutos() {
        // Lógica para associar produtos ao cliente
        const associacao = {
          clienteId: this.clienteSelecionado,
          produtosIds: this.produtosSelecionados,
        };
        console.log('Associação:', associacao);
  
        // Resetar seleções após associação (opcional)
        this.clienteSelecionado = null;
        this.produtosSelecionados = [];
      },
    },
  };
  