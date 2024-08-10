import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue'; // Sesuaikan path jika perlu
import Price from '../pages/Price.vue';
import Retail from '../pages/Retail.vue';
import Contact from '../pages/Contact.vue';
import AboutUs from '../pages/About-us.vue';
import Blog from '../pages/Blog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  },
  {
    path: '/retail',
    name: 'Retail',
    component: Retail
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  // Tambahkan rute lain di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
