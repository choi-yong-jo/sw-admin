import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/Home.vue'

const routes = [
    {
        path: '/login',
        component: () => import('../views/common/Login.vue')
    },
    {
        path: '/board/list',
        component: () => import('../views/board/boardList.vue')
    },
    {
        path: '/board/detail',
        component: () => import('../views/board/boardDetail.vue')
    },
    {
        path: '/board/write',
        component: () => import('../views/board/boardWrite.vue')
    },
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
    },
    {
        path: '/team/list',
        component: () => import('../views/team/teamList.vue')
    },
    // {
    //     path: '/team/detail',
    //     component: () => import('../views/team/teamDetail.vue')
    // },
    // {
    //     path: '/team/write',
    //     component: () => import('../views/team/teamWrite.vue')
    // },
    {
        path: '/',
        name: 'Home',
        component: PageHome
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router