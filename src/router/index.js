// Arquivo: src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ClientesPage from '../views/ClientesPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: ClientesPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
