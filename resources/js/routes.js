const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')


//importamos los componentes para el producto
const Crear = () => import('./components/productos/Crear.vue')
const Mostrar = () => import('./components/productos/Mostrar.vue')
const Editar = () => import('./components/productos/Editar.vue')


export const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'contacto', path: '/contacto', component: Contacto },
    { name: 'crear', path: '/crear', component: Crear },
    { name: 'mostrar', path: '/mostrar', component: Mostrar },
    { name: 'editar', path: '/editar/:id', component: Editar }
]

