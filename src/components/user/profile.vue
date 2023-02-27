<template>
	<div class="profile">
		<h1 class="title">用户个人信息</h1>

		<el-avatar
			:size="100"
			fit="cover"
			src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
		/>
		<h3 class="userName">{{ data.userData.name }}呆小呆的小呆</h3>
		<p class="signature">{{ data.userData.signature }}爱听歌的小伙一枚~</p>

		<div class="userInfo">
			<p>性别：{{ data.userData.gender }}</p>
			<p>听过歌曲数量: {{ data.userData.listenSongs }}</p>
		</div>
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
			gender: '',
			listenSongs: 0,
			photoUrl: '',
		},
	})

	onMounted(() => {
		init(localStorage.getItem('userID'))
	})

	const init = async uID => {
		const res = await getProfile(uID)
		console.log(res)

		data.userData.name = res.profile.nickname
		data.userData.signature = res.profile.signature
		data.userData.gender = res.profile.gender == 1 ? 男 : 女
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
	@import url(../../base.less);
	.profile {
		color: white;
		text-align: center;
		.title {
			margin-top: 100px;
		}

		.el-avatar {
			margin-top: 30px;
			border: 1px solid rgb(88, 88, 88);
		}
		.userName {
			margin-top: 30px;
		}
		.signature {
			margin-top: 3px;
			color: @colorInfo;
		}
		.userInfo {
			font-weight: bold;
		}
	}
</style>
