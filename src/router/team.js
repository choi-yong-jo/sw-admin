import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/team/list',
        name: 'TeamList',
        component: () => import('../views/team/teamList.vue')
    },
    {
        path: '/team/detail',
        name: 'TeamDetail',
        component: () => import('../views/team/teamDetail.vue')
    },
    {
        path: '/team/write',
        name: 'TeamWrite',
        component: () => import('../views/team/teamWrite.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router