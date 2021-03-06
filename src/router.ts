import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProductView from './views/ProductView.vue';
import ProductCreate from './views/ProductCreate.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
    },
    {
      path: '/products/create',
      name: 'products-create',
      component: ProductCreate,
    },
  ],
});
