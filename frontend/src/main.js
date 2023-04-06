import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// set up vue router with all the pages leading home
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import Projects from '@/views/Projects.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/projects', component: Projects }
  ],
});

createApp(App).use(router).mount('#app')
