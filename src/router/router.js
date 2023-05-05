import { createRouter, createWebHashHistory } from 'vue-router'
import { ElNotification } from 'element-plus'

import search from '/src/router/search'
import user from '/src/router/user'
import common from '/src/router/common'

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
			component: () => import('/src/root/app.vue'),
			children: [
				...user,
				{
					name: 'main',
					path: '/main',
					component: () => import('/src/view/index/main-body.vue'),
				},
				{
					name: 'playlist',
					path: '/playlist/:id',
					component: () => import('/src/view/playlist.vue'),
				},
				{
					name: 'newSongExpress',
					path: '/newSongExpress/:type',
					component: () => import('/src/view/newSongExpress.vue'),
				},
				{
					name: 'collect',
					path: '/collect',
					component: () => import('/src/view/collect.vue'),
					meta: {
						needLogin: true,
					},
				},
				{
					name: 'recSong',
					path: '/recSong',
					component: () => import('/src/view/recSong.vue'),
				},
				{
					name: 'search',
					path: '/search',
					component: () => import('/src/view/search.vue'),
					children: search,
				},
			],
		},
		...common,
	],
})

router.beforeEach(to => {
	if (to.meta.needLogin && !localStorage.getItem('cookie')) {
		if (to.name != 'login') {
			ElNotification({
				title: '需要登录',
				type: 'error',
			})
			return { name: 'login' }
		}
	}
})

export default router
