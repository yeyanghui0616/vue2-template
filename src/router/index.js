import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/layout';
Vue.use(VueRouter);

export const routes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true,
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true,
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		hidden: true,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		redirect: '/dashboard/table',
		component: Layout,
		meta: { title: '顶部菜单一', icon: 'el-icon-data-analysis' },
		children: [
			{
				path: '/dashboard/table',
				name: 'Table',
				component: () => import('@/views/dashboard/index'),
				meta: { title: '二级菜单一', icon: 'el-icon-data-analysis' },
				children: [
					{
						path: '/dashboard/table',
						name: 'Table',
						component: () => import('@/views/dashboard/index'),
						meta: { title: '三级菜单一', icon: 'el-icon-data-analysis' },
						children: [
							{
								path: '/dashboard/table',
								name: 'Table',
								component: () => import('@/views/dashboard/index'),
								meta: { title: '四级菜单一', icon: 'el-icon-data-analysis' },
							},
						],
					},
				],
			},
			
		],
	},
	{
		path: '/example',
		component: Layout,
		redirect: '/example/table',
		name: 'Example',
		meta: { title: '顶部菜单二', icon: 'el-icon-s-help' },
		children: [
			{
				path: '/example/table',
				name: 'Table',
				component: () => import('@/views/example/table'),
				meta: { title: '顶部菜单二/二级菜单一', icon: 'el-icon-data-analysis' },
			},
			{
				path: '/example/tree',
				name: 'Tree',
				component: () => import('@/views/example/tree'),
				meta: { title: '顶部菜单二/二级菜单一', icon: 'el-icon-data-analysis' },
			},
		],
	},
	// 404 要放在最后
	{ path: '*', redirect: '/404', hidden: true }
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
