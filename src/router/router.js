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
			component: () => import('../view/app.vue'),
			children: [
				{
					name: 'login',
					path: '/login',
					component: () => import('../components/user/login.vue'),
				},
				{
					name: 'loginQRcode',
					path: '/loginQRcode',
					component: () => import('../components/user/loginQRcode.vue'),
				},
				{
					name: 'main',
					path: '/main',
					component: () => import('../components/main-body.vue'),
				},
				{
					name: 'playlist',
					path: '/playlist/:id',
					component: () => import('../components/playlist.vue'),
				},
				{
					name: 'collect',
					path: '/collect',
					component: () => import('../components/collect.vue'),
					meta: {
						needLogin: true,
					},
				},
				{
					name: 'profile',
					path: '/profile',
					component: () => import('../components/user/profile.vue'),
				},
				{
					name: 'searchRes',
					path: '/searchRes',
					component: () => import('../components/searchRes.vue'),
					children: [
						{
							path: '/searchRes',
							redirect: '/searchRes/song',
						},
						{
							name: 'searchResSong',
							path: '/searchRes/song',
							component: () => import('../components/consist/searchSongTable.vue'),
						},
						{
							name: 'searchResArtist',
							path: '/searchRes/artist',
							component: () => import('../components/consist/searchArtistTable.vue'),
						},
						{
							name: 'searchResPlaylist',
							path: '/searchRes/playlist',
							component: () => import('../components/consist/searchPlaylistTable.vue'),
						},
						{
							name: 'searchResAlbum',
							path: '/searchRes/album',
							component: () => import('../components/consist/searchAlbumTable.vue'),
						},
						{
							name: 'searchResUser',
							path: '/searchRes/user',
							component: () => import('../components/consist/searchUserTable.vue'),
						},
					],
				},
			],
		},
		{
			name: 'error',
			path: '/error',
			component: () => import('../components/feedback/error.vue'),
		},
		{
			name: 'test',
			path: '/test',
			component: () => import('../../test/test.vue'),
		},
		{
			name: 'testPage',
			path: '/testPage',
			component: () => import('../../test/layoutTest.vue'),
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
