import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("@/pages/home/index.vue")
  },
  {
    path: "/about",
    component: () => import("@/pages/about/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
