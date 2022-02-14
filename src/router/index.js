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
			{
				path: '/splitscreen',
				name: 'splitscreen',
				meta: {
					title: "左右分屏"
				},
				component: () => import('@/views/js/splitscreen.vue'),
			},
			{
				path: '/prictice',
				name: 'prictice',
				meta: {
					title: "学习"
				},
				component: () => import('@/views/js/prictice.vue'),
			},
			{
				path: '/gluttonoussnake',
				name: 'gluttonoussnake',
				meta: {
					title: "贪吃蛇"
				},
				component: () => import('@/views/js/gluttonoussnake.vue'),
			},
			{
				path: '/mediascreen',
				name: 'mediascreen',
				meta: {
					title: "图片响应式"
				},
				component: () => import('@/views/js/mediascreen.vue'),
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
