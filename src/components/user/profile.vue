<template>
	<div class="profile">
		<h1 class="title">用户资料</h1>
		<p>昵称: {{ data.userData.name }}</p>
		<p>听过歌曲数量: {{ data.userData.listenSongs }}</p>
		性别：
		<el-radio-group v-model="data.userData.gender">
			<el-radio
				:label="1"
				size="large"
				>男</el-radio
			>
			<el-radio
				:label="0"
				size="large"
				>女</el-radio
			>
		</el-radio-group>

		<el-button
			type="danger"
			@click="gologout"
			>登出</el-button
		>
	</div>
</template>

<script setup>
	import { reactive, onMounted } from 'vue'
	import { useRouter } from 'vue-router'
	import { logout, getProfile } from '../../service/user'

	const router = useRouter()

	const data = reactive({
		// 是否可以修改用户资料
		type: false,
		userData: {
			name: '',
			signature: '',
			gender: 1,
			listenSongs: 0,
			photoUrl: '',
		},
	})

	onMounted(() => {
		init(localStorage.getItem('userID'))
	})

	const init = async uID => {
		const res = await getProfile(uID)

		data.userData.name = res.profile.nickname
		data.userData.signature = res.profile.signature
		data.userData.gender = res.profile.gender
		data.userData.listenSongs = res.listenSongs
		data.userData.photoUrl = res.profile.avatarUrl
	}

	// 退出登录
	const gologout = async () => {
		const res = await logout()
		if (res.code == 200) {
			localStorage.clear()
			router.push({ name: 'login' })
		} else {
			ElNotification({
				title: '错误',
				message: '退出登录失败',
				type: 'error',
			})
		}
	}
</script>

<style lang="less" scoped>
	.profile {
		.el-button {
			margin-top: 200px;
			display: block;
		}
	}
</style>
