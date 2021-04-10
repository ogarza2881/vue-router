import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Lures from './views/Lures.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/404.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/lures', component: Lures },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})