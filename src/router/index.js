import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ClientesPage from '@/views/ClientesPage.vue';
import ProdutosPage from '@/views/ProdutosPage.vue';
import ClienteProdutoAssociacaoForm from '@/components/ClienteProdutoAssociacaoForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clientes',
    name: 'ClientesPage',
    component: ClientesPage,
  },
  {
    path: '/produtos',
    name: 'ProdutosPage',
    component: ProdutosPage,
  },
  {
    path: '/associacao',
    name: 'ClienteProdutoAssociacaoForm',
    component: ClienteProdutoAssociacaoForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
