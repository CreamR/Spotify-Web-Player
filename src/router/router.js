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
			component: () => import('/src/root/app.vue'),
			children: [
				{
					name: 'login',
					path: '/login',
					component: () => import('/src/view/user/login.vue'),
				},
				{
					name: 'loginQRcode',
					path: '/loginQRcode',
					component: () => import('/src/view/user/loginQRcode.vue'),
				},
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
					name: 'collect',
					path: '/collect',
					component: () => import('/src/view/collect.vue'),
					meta: {
						needLogin: true,
					},
				},
				{
					name: 'profile',
					path: '/profile',
					component: () => import('/src/view/user/profile.vue'),
				},
				{
					name: 'recSongs',
					path: '/recSongs',
					component: () => import('/src/view/recSongs.vue'),
				},
				{
					name: 'search',
					path: '/search',
					component: () => import('/src/view/search.vue'),
					children: [
						{
							path: '/search',
							redirect: '/search/song',
						},
						{
							name: 'searchSong',
							path: '/search/song',
							component: () => import('/src/components/searchSong.vue'),
						},
						{
							name: 'searchArtist',
							path: '/search/artist',
							component: () => import('/src/components/searchArtist.vue'),
						},
						{
							name: 'searchPlaylist',
							path: '/search/playlist',
							component: () => import('/src/components/searchPlaylist.vue'),
						},
						{
							name: 'searchAlbum',
							path: '/search/album',
							component: () => import('/src/components/searchAlbum.vue'),
						},
						{
							name: 'searchUser',
							path: '/search/user',
							component: () => import('/src/components/searchUser.vue'),
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
