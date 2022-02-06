import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { getToken } from '@/utils/auth'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue'),
        meta: { title: '首页' },
        children: [
            {
                path: 'home',
                name: 'HomeOne',
                component: Home,
                meta: { title: 'Home' }
            },
            {
                path: 'about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
                meta: { title: '关于我们' }
            },
        ]
    },
    {
        path: '/system',
        component: Index,
        redirect: '/',
        children: [
            {
                path: 'menu',
                name: 'Menus',
                component: () => import('@/views/system/Menu.vue'),
                meta: { title: '菜单设置' },
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    let token = getToken()

    if (token) {
        if (store.getters.userId === '') {
            store.dispatch('user/setInfo', token)
        }
        next()
    } else if (!token && to.name !== 'Login') {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
