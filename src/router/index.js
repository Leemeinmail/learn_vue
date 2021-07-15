import { createRouter, createWebHistory } from 'vue-router';
import home from '@/components/home.vue';
import notFound from '@/components/notFound.vue';
import blogList from '@/components/blogList.vue';
import blogDetail from '@/components/blogDetail.vue';
import contacts from '@/components/contacts.vue';

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/blog-list/', name: 'blogList', component: blogList },
    { path: '/blog-list/:id/', name: 'blogListPages', component: blogList },
    { path: '/blog-detail/:post/', name: 'blogDetail', component: blogDetail },
    { path: '/contacts/', name: 'contacts', component: contacts },
    { path: '/:catchAll(.*)', name: 'notFound', component: notFound }
]

const router = createRouter({
    history: createWebHistory( process.env.BASE_URL ),
    routes
})

export default router
