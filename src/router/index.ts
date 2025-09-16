import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Orbe from '@/views/Orbe.vue'
import TestRouter from '@/views/main/TestRouter.vue'
import Page from '@/views/main/Page.vue'

const routes: Array<RouteRecordRaw> = [
	{
      path: '/',
      name: 'orbe',
      component: Orbe
    },
    {
	  path: '/componentes',
      name: 'componentes',
      component: TestRouter
	},	
    {
	  path: '/page',
      name: 'Page',
      component: Page
	}
//    ,
//    {
//      path: '/about',
//      name: 'about',
//      // route level code-splitting
//      // this generates a separate chunk (About.[hash].js) for this route
//      // which is lazy-loaded when the route is visited.
//      component: () => import('../views/AboutView.vue')
//    }
,
  // ⚠️ Ruta "catch-all" para manejar 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
  ]
  
  const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
