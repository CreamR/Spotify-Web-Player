import { createRouter, createWebHashHistory } from 'vue-router'
import { ElNotification } from 'element-plus'

import search from '/src/router/search'
import user from '/src/router/user'
import common from '/src/router/common'
import collect from '/src/router/collect'

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
					name: 'newsongExpress',
					path: '/newsong-express/:type',
					component: () => import('/src/view/newsong-express.vue'),
				},
				{
					name: 'collect',
					path: '/collect',
					component: () => import('/src/view/collect.vue'),
					children: collect,
					meta: {
						needLogin: true,
					},
				},
				{
					name: 'recSong',
					path: '/rec-song',
					component: () => import('/src/view/rec-song.vue'),
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
		// 防抖
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
