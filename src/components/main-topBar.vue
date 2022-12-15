<template>
	<div class="topBar">
		<section class="left">
			<el-button
				:icon="ArrowLeftBold"
				circle
				size="large"
				text
				bg
			/>
			<el-button
				:icon="ArrowRightBold"
				circle
				size="large"
				text
				bg
			/>
			<input
				v-model="keywords"
				type="text"
				class="search"
			/>
		</section>
		<section class="right">
			<el-button
				link
				large
				type="info"
				>说明文档</el-button
			>
			<el-button
				type="success"
				round
				size="large"
				@click="$router.push({ name: 'login' })"
				v-if="!data.login"
				>登录</el-button
			>
			<div
				class="userInfo"
				v-else
			>
				<el-avatar
					:src="data.userPhoto"
					size="small"
				/>
				<span>{{ data.userName }}</span>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ArrowLeftBold, ArrowRightBold, Search } from '@element-plus/icons-vue'
	import { reactive, ref, onMounted } from 'vue'

	import { getProfile } from '../service/user'

	const data = reactive({
		uID: localStorage.getItem('userID') ?? null,
		login: localStorage.getItem('token') ? true : false,
		userName: '',
		userPhoto: '',
	})
	const keywords = ref()

	onMounted(() => {
		init()
	})
	const init = async () => {
		if (data.login) {
			const res = await getProfile(data.uID)
			data.userName = res.profile.nickname
			data.userPhoto = res.profile.avatarUrl
		}
	}
</script>

<style lang="less" scoped>
	@import url(../base.less);
	.topBar {
		#setFlex(space-between);

		background-color: rgb(8, 8, 8);
		.left {
			.el-button {
				margin-left: 20px;
				background-color: rgb(18, 18, 18);
				border: 1px solid rgb(18, 18, 18);
			}
			.search {
				#setWH(400px, 40px);
				margin-left: 15px;
				padding: 10px 40px;

				font-size: 15px;

				background-image: url(../assets/search.svg);
				background-repeat: no-repeat;
				background-size: 22px, 22px;
				background-position: 10px;

				outline: none;
				border: none;
				border-radius: 30px;
				border: 1px solid @colorInfo;
			}
		}
		.right {
			.el-button {
				margin-right: 1.3vw;
				font-weight: bold;
			}
			.userInfo {
				display: inline-block;
				vertical-align: middle;

				padding: 6px 10px;
				margin-right: 20px;

				border-radius: 50px;
				background-color: #2d3136;

				transition: all 0.2s ease;
				cursor: pointer;
				&:hover {
					background-color: black;
				}
				.el-avatar {
					vertical-align: middle;
					margin-right: 6px;
				}
				span {
					color: whitesmoke;
					font-size: 13px;
				}
			}
		}
	}
</style>
