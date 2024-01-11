import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import CadastroClienteForm from '@/components/CadastroClienteForm.vue';
import CadastroProdutoForm from '@/components/CadastroProdutoForm.vue';
import ProdutoCard from '@/components/ProdutoCard.vue';
import ProdutosPage from '@/views/ProdutosPage.vue';

describe('Projeto Vue', () => {
  it('renderiza o componente App', () => {
    const wrapper = mount(App);
    expect(wrapper.exists()).to.be.true;
  });

  it('renderiza o componente CadastroClienteForm', () => {
    const wrapper = mount(CadastroClienteForm);
    expect(wrapper.exists()).to.be.true;
  });

  it('renderiza o componente CadastroProdutoForm', () => {
    const wrapper = mount(CadastroProdutoForm);
    expect(wrapper.exists()).to.be.true;
  });

  it('renderiza o componente ProdutoCard', () => {
    const wrapper = mount(ProdutoCard);
    expect(wrapper.exists()).to.be.true;
  });

  it('renderiza o componente ProdutosPage', () => {
    const wrapper = mount(ProdutosPage);
    expect(wrapper.exists()).to.be.true;
  });

  // Adicione mais testes conforme necessário
});
