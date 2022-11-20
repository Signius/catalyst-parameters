import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/profile', component: Profile }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router;