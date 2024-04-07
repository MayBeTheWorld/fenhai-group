import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue'
import Produce from '../views/produce.vue';

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/produce', name: "produce", component: Produce}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
