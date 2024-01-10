import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ClientesPage from '@/views/ClientesPage.vue';
import ProdutosPage from '@/views/ProdutosPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
