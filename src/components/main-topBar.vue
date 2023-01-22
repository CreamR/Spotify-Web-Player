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
				v-if="!data.logined"
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
	import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
	import { reactive, ref, onMounted, watch } from 'vue'

	import { getProfile } from '../service/user'

	const data = reactive({
		uID: localStorage.getItem('userID') ?? null,
		logined: localStorage.getItem('token') ? true : false,
		userName: '',
		userPhoto: '',
	})
	const keywords = ref()

	onMounted(() => {
		init(data.uID)
	})
	const init = async uID => {
		if (data.logined) {
			const res = await getProfile(uID)
			data.userName = res.profile.nickname
			data.userPhoto = res.profile.avatarUrl
		}
	}

	watch(
		() => data.logined,
		() => {
			init(data.uID)
		}
	)
	watch(localStorage.getItem('token'), newVal => {
		data.logined = newVal
	})
</script>

<style lang="less" scoped>
	@import url(../base.less);
	.topBar {
		#setFlex(space-between);

		background-color: rgb(8, 8, 8);
		.left {
			.el-button {
				background-color: rgb(18, 18, 18);
				border: 1px solid rgb(18, 18, 18);

				margin-left: 20px;
			}
			.search {
				#setWH(400px, 40px);
				font-size: 15px;

				outline: none;
				border: none;
				border-radius: 30px;
				border: 1px solid @colorInfo;

				margin-left: 15px;
				padding: 10px 40px;

				background-image: url(../assets/search.svg);
				background-repeat: no-repeat;
				background-size: 22px, 22px;
				background-position: 10px;
			}
		}
		.right {
			.el-button {
				font-weight: bold;
				margin-right: 1.3vw;
			}
			.userInfo {
				display: inline-block;
				border-radius: 50px;
				background-color: #2d3136;

				padding: 6px 10px;
				margin-right: 20px;
				vertical-align: middle;

				cursor: pointer;

				#trs-bgc(black, black);
				.el-avatar {
					margin-right: 6px;
					vertical-align: middle;
				}
				span {
					color: white;
					font-size: 13px;
				}
			}
		}
	}
</style>
