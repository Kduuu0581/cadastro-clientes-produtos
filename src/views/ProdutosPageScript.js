// Arquivo: src/views/ProdutosPageScript.js
import CadastroProdutoForm from '@/components/CadastroProdutoForm.vue';
import ProdutoCard from '@/components/ProdutoCard.vue';

export default {
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    adicionarProduto(produto) {
      this.produtos.push(produto);
    },
  },
  components: {
    CadastroProdutoForm,
    ProdutoCard,
  },
};
