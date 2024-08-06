import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/member/list',
        component: () => import('../views/member/list.vue')
    },
    {
        path: '/member/detail',
        component: () => import('../views/member/detail.vue')
    },
    {
        path: '/member/write',
        component: () => import('../views/member/write.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router