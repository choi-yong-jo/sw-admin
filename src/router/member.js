import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/member/list',
        component: () => import('../views/member/memberList.vue')
    },
    {
        path: '/member/detail',
        component: () => import('../views/member/memberDetail.vue')
    },
    {
        path: '/member/write',
        component: () => import('../views/member/memberWrite.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router