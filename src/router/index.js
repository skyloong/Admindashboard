import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { getToken } from '@/utils/auth'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: 'home',
                name: 'HomeOne',
                component: Home
            },
            {
                path: 'about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: 'closetab',
                name: 'CloseTab',
                component: () => import(/* webpackChunkName: "about" */ '../components/nav/CloseTab.vue')
            }
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
        if (store.getters.userId === '')  {
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
