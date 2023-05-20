export default [
	{
		path: '/search',
		redirect: '/search/single',
	},
	{
		name: 'searchSingle',
		path: '/search/single',
		component: () => import('/src/components/table/table-single.vue'),
	},
	{
		name: 'searchArtist',
		path: '/search/artist',
		component: () => import('/src/components/table/table-artist.vue'),
	},
	{
		name: 'searchPlaylist',
		path: '/search/playlist',
		component: () => import('/src/components/table/table-playlist.vue'),
	},
	{
		name: 'searchAlbum',
		path: '/search/album',
		component: () => import('/src/components/table/table-album.vue'),
	},
	{
		name: 'searchUser',
		path: '/search/user',
		component: () => import('/src/components/table/table-user.vue'),
	},
]
