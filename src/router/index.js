import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [
			{
				path: '/Index',
				name: 'Index',
				meta: {
					title: "首页"
				},
				component: Index
			},
			{
				path: '/labelList',
				name: 'labelList',
				meta: {
					title: "html标签"
				},
				component: () => import('@/views/html/labelList.vue'),
			},
			{
				path: '/elasticlayout',
				name: 'elasticlayout',
				meta: {
					title: "弹性布局"
				},
				component: () => import('@/views/html/elasticlayout.vue'),
			},
			{
				path: '/jsmethod',
				name: 'jsmethod',
				meta: {
					title: "Javascript方法"
				},
				component: () => import('@/views/js/jsmethod.vue'),
			},
			{
				path: '/bugchange',
				name: 'bugchange',
				meta: {
					title: "some bug changes"
				},
				component: () => import('@/views/bug/bugchange.vue'),
			},
			{
				path: '/somefeatures',
				name: 'somefeatures',
				meta: {
					title: "一些功能"
				},
				component: () => import('@/views/js/somefeatures.vue'),
			},
			
		]
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
