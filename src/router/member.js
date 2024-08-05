import { createRouter, createWebHistory } from 'vue-router'
import Member from '@/views/member/list.vue'

const routes = [
    {
        path: '/member/list',
        name: 'List',
        component: Member
    },
    {
        path: '/member/detail',
        name: 'Detail',
        component: () => import('../views/member/detail.vue')
    },
    {
        path: '/member/create-modify',
        name: 'Create',
        component: () => import('../views/member/create-modify.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router