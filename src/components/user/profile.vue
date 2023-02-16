<template>
	<div class="profile">
		<h1 class="title">设置与个人信息</h1>
		<span>昵称: {{ data.userName }}</span>
		<span>uID: {{ data.userID }}</span>
		<el-button
			type="danger"
			dark="true"
			@click="gologout"
			>登出</el-button
		>
	</div>
</template>

<script setup>
	import { reactive } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { logout } from '../../service/user'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		// 是否可以修改用户资料
		type: false,
	})

	const gologout = async () => {
		const res = await logout()
		if (res.code == 200) {
			localStorage.clear()
			router.push({ name: 'login' })
		} else {
			// 退出登录失败
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
	}
</style>
