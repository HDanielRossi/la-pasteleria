import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../views/ProductosView.vue'
import Sucursales from '../views/SucursalesView.vue'
import ArmaTuPastel from '../views/ArmaTuPastelView.vue'
import Contacto from '../views/ContactoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos,
  },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: Sucursales,
  },
  {
    path: '/armaTuPastel',
    name: 'armaTuPastel',
    component: ArmaTuPastel,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

