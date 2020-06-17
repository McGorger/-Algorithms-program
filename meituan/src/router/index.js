import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default.vue'
import Blank from '@/layout/blank.vue'
import Index from '@/components/index/index.vue'
import ChangeCity from '@/components/changeCity/index.vue'
import GoodList from '@/components/goodlist/index.vue'
import Login from '@/components/page/login.vue'
import Register from '@/components/page/register.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'default',
            component: Default,
            redirect: 'index',
            children: [{
                path: '/index',
                name: 'index',
                component: Index
            }, {
                path: '/changeCity',
                name: 'changeCity',
                component: ChangeCity
            }, {
                path: 's/:name',
                name: 'goods',
                component: GoodList
            }]
        }, {
            path: '/blank',
            name: 'blank',
            component: Blank,
            children: [{
                path: 'login',
                name: 'login',
                component: Login,
            }, {
                path: 'register',
                name: 'register',
                component: Register,
            }]
        }

    ]
})