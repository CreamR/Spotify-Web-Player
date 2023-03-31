import { createRouter, createWebHashHistory } from 'vue-router'
import { ElNotification } from 'element-plus'

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
			component: () => import('/src/view/app.vue'),
			children: [
				{
					name: 'login',
					path: '/login',
					component: () => import('/src/components/user/login.vue'),
				},
				{
					name: 'loginQRcode',
					path: '/loginQRcode',
					component: () => import('/src/components/user/loginQRcode.vue'),
				},
				{
					name: 'main',
					path: '/main',
					component: () => import('/src/components/main-body.vue'),
				},
				{
					name: 'playlist',
					path: '/playlist/:id',
					component: () => import('/src/components/playlist.vue'),
				},
				{
					name: 'collect',
					path: '/collect',
					component: () => import('/src/components/collect.vue'),
					meta: {
						needLogin: true,
					},
				},
				{
					name: 'profile',
					path: '/profile',
					component: () => import('/src/components/user/profile.vue'),
				},
				{
					name: 'searchRes',
					path: '/searchRes',
					component: () => import('/src/components/searchRes.vue'),
					children: [
						{
							path: '/searchRes',
							redirect: '/searchRes/song',
						},
						{
							name: 'searchResSong',
							path: '/searchRes/song',
							component: () => import('/src/components/consist/searchSongTable.vue'),
						},
						{
							name: 'searchResArtist',
							path: '/searchRes/artist',
							component: () => import('/src/components/consist/searchArtistTable.vue'),
						},
						{
							name: 'searchResPlaylist',
							path: '/searchRes/playlist',
							component: () => import('/src/components/consist/searchPlaylistTable.vue'),
						},
						{
							name: 'searchResAlbum',
							path: '/searchRes/album',
							component: () => import('/src/components/consist/searchAlbumTable.vue'),
						},
						{
							name: 'searchResUser',
							path: '/searchRes/user',
							component: () => import('/src/components/consist/searchUserTable.vue'),
						},
					],
				},
			],
		},
		{
			name: 'error',
			path: '/error',
			component: () => import('/src/components/feedback/error.vue'),
		},
		{
			name: 'test',
			path: '/test',
			component: () => import('/test/test.vue'),
		},
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
