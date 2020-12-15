import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import RegistrarUsuario from './components/RegistrarUsuario'
import AutenticarUsuario from './components/AutenticarUsuario'
import Inicio from './components/Inicio'  
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "inicio",
            component: Inicio
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
        {
            path: '/autenticar-usuario',
            name: "autenticar_usuario",
            component: AutenticarUsuario
        },
        {
            path: '/inicio',
            name: "inicio",
            component: Inicio
        },
    ]
})

export default router