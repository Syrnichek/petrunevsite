import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Pik from './components/Pik.vue';
import S7 from './components/S7.vue';
import Lenta from './components/Lenta.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/Pik', component: Pik },
    { path: '/S7', component: S7 },
    { path: '/Lenta', component: Lenta },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;