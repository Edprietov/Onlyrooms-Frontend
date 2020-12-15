import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import RegistrarUsuario from './components/RegistrarUsuario'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/balance/:username',
            name: "user_balance",
            component: UserBalance
        },
        {
            path: '/registrar-usuario',
            name: "registrar_usuario",
            component: RegistrarUsuario
        },
    ]
})

export default router