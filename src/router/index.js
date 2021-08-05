import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [
			{
				path: '/index',
				name: 'Index',
				meta: {
					title: "首页"
				},
				component: Index
			},
			// {
			// 	path: '/userCenter',
			// 	name: 'UserCenter',
			// 	meta: {
			// 		title: "修改密码"
			// 	},
			// 	component: () => import('@/views/UserCenter.vue')
			// },
		]
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
