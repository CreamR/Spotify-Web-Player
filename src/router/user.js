export default [
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
		name: 'profile',
		path: '/profile',
		component: () => import('/src/view/user/profile.vue'),
	},
]
