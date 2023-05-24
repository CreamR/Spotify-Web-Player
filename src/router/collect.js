export default [
	{
		name: 'artist',
		path: '/collect/artist',
		component: () => import('/src/components/table/table-artist.vue'),
	},
	{
		name: 'album',
		path: '/collect/album',
		component: () => import('/src/components/table/table-album.vue'),
	},
	{
		name: 'video',
		path: '/collect/video',
		component: () => import('/src/components/table/table-video.vue'),
	},
]
