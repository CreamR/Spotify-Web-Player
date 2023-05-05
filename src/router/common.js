export default [
	{
		name: 'error',
		path: '/error',
		component: () => import('/src/components/common/error.vue'),
	},
	{
		name: 'test',
		path: '/test',
		component: () => import('/test/test.vue'),
	},
]
