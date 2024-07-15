import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Author from '../views/Author.vue'
import Mainpage from '../views/Mainpage.vue'
import Login from '../components/auth/Login.vue'

import Register from '../components/auth/regis/Register.vue' 
import Valid from '../components/auth/regis/Valid.vue' 
import Regisform from '../components/auth/regis/Regisform.vue'

import Forgot from '../components/auth/forgot/Forgot.vue'
import ValidForgot from '../components/auth/forgot/ValidForgot.vue'
import ForgotForm from '../components/auth/forgot/ForgotForm.vue'
import Project from '../components/mainpage/Project.vue'
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/author',
        component: Author,
        children: [
            {
                path: '', 
                name: 'login',
                component: Login,
            },
            {
                path: 'register', 
                name: 'register',
                component: Register,
            },
            
            {
                path: 'validate', 
                name: 'validate',
                component: Valid,
            },
            {
                path: 'regisform',
                name: 'regisform',
                component: Regisform,
            },
            {
                path: 'forgot',
                name: 'forgot',
                component: Forgot,
            },
            {
                path: 'validforgot',
                name: 'validforgot',
                component: ValidForgot,
            },
            {
                path: 'forgotform',
                name: 'forgotform',
                component: ForgotForm,
            }
        ]
    },
    {
        path: '/mainpage',
        component: Mainpage,
        children: [
            {
                path: '',
                component: Project,
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*', // Catch-all route
        redirect: '/',
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
