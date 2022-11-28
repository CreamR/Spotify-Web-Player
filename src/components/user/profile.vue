<template>
	<div class="profile">
		<h1>设置与个人信息</h1>
		<span>昵称: {{ data.userName }}</span>
		<span>uID: {{ data.userID }}</span>
		<el-button
			type="danger"
			@click="tologout"
			>登出</el-button
		>
	</div>
</template>

<script setup>
	import { reactive } from 'vue'
	import { logout } from '../../service/user'

	const tologout = () => {
		logout()
	}
</script>

<style lang="less" scoped></style>
