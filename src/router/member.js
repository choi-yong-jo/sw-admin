import { createRouter, createWebHistory } from 'vue-router'
import Member from '@/views/member/list.vue'

const routes = [
    {
        path: '/member/list',
        component: Member
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