import { createRouter, createWebHistory } from 'vue-router'
import Team from '@/views/team/list.vue'

const routes = [
    {
        path: '/team/list',
        name: 'TeamList',
        component: Team
    },
    {
        path: '/team/detail',
        name: 'TeamDetail',
        component: () => import('../views/team/detail.vue')
    },
    {
        path: '/team/write',
        name: 'TeamWrite',
        component: () => import('../views/team/write.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router