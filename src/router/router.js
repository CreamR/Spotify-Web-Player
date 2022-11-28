import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			name: 'app',
			path: '/app',
			component: () => import('../view/app.vue'),
			children: [
				{
					name: 'login',
					path: '/login',
					component: () => import('../components/user/login.vue'),
				},
				{
					name: 'main',
					path: '/main',
					component: () => import('../components/main-body.vue'),
				},
			],
		},
		{
			name: 'test',
			path: '/test',
			component: () => import('../../test/test.vue'),
		},
	],
})

// router.beforeEach((to, from, next) => {
//   if (to.path == '/home/application') {
//     if (sessionStorage.getItem('token') == 1) {
//       next()
//     } else {
//     //   nonething
//       next('/home/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
