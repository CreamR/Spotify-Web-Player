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
				{
					name: 'playlist',
					path: '/playlist/:id',
					component: () => import('../components/playlist.vue'),
				},
				{
					name: 'collect',
					path: '/collect',
					component: () => import('../components/collect.vue'),
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
			name: 'test',
			path: '/test',
			component: () => import('../../test/test.vue'),
		},
	],
})

router.beforeEach(to => {
	if (
		!localStorage.getItem('token') &&
		// 避免无限redirect
		to.name != 'login'
	)
		return { name: 'login' }
})

export default router
