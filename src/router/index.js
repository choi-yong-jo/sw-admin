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
        name: 'MemberList',
        component: () => import('../views/Page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router