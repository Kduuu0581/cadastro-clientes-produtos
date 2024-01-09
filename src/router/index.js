import Vue from 'vue';
import VueRouter from 'vue-router';
import ClientesPage from '@/views/ClientesPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/clientes',
    name: 'ClientesPage',
    component: ClientesPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
