export default [
	{
		path: '/search',
		redirect: '/search/song',
	},
	{
		name: 'searchSong',
		path: '/search/song',
		component: () => import('/src/components/search/searchSong.vue'),
	},
	{
		name: 'searchArtist',
		path: '/search/artist',
		component: () => import('/src/components/search/searchArtist.vue'),
	},
	{
		name: 'searchPlaylist',
		path: '/search/playlist',
		component: () => import('/src/components/search/searchPlaylist.vue'),
	},
	{
		name: 'searchAlbum',
		path: '/search/album',
		component: () => import('/src/components/search/searchAlbum.vue'),
	},
	{
		name: 'searchUser',
		path: '/search/user',
		component: () => import('/src/components/search/searchUser.vue'),
	},
]
