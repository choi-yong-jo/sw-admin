import { createRouter, createWebHistory } from 'vue-router'
import Team from '@/views/team/list.vue'

const routes = [
    {
        path: '/team/list',
        name: 'List',
        component: Team
    },
    {
        path: '/team/detail',
        name: 'Detail',
        component: () => import('../views/team/detail.vue')
    },
    {
        path: '/team/create-modify',
        name: 'Create',
        component: () => import('../views/team/create-modify.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router