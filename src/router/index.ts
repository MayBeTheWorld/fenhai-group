import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue'
import Produce from '../views/produce.vue';
import AboutUs from '../views/aboutUs.vue';
import AfterSales from '../views/afterSales.vue';
import News from '../views/news.vue';
import Contact from '../views/contact.vue';

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/produce', name: "produce", component: Produce},
  { path: '/aboutUs', name: "aboutUs", component: AboutUs},
  { path: '/afterSales', name: "afterSales", component: AfterSales},
  { path: '/news', name: "news", component: News},
  { path: '/contact', name: "contact", component: Contact}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  // 如果当前路径是根路径，重定向到默认路径
  if (to.path === '/dist/index.html') {
    next('/'); // 将默认路径设置为 '/'，你可以根据需要设置成其他路径
  } else {
    next(); // 继续导航
  }
});

export default router;
