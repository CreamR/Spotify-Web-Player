<template>
	<div class="topBar">
		<div class="left">
			<el-button
				:icon="ArrowLeftBold"
				circle
				size="large"
				text
				bg
				@click="$router.back"
			/>
			<el-button
				:icon="ArrowRightBold"
				circle
				size="large"
				text
				bg
				@click="$router.go"
			/>
			<input
				v-model="keywords"
				type="text"
				class="search"
				placeholder="搜索 歌手 专辑 音乐"
				@input="
					$router.push({
						path: '/search',
						query: {
							keywords: keywords,
						},
					})
				"
			/>
		</div>
		<div class="right">
			<el-icon
				color="red"
				size="22"
				@click="gologout"
				><SwitchButton
			/></el-icon>
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
				@click="$router.push({ name: 'profile' })"
				v-else
			>
				<el-avatar
					:src="data.userPhoto"
					size="small"
				/>
				<span>{{ data.userName }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ArrowLeftBold, ArrowRightBold, SwitchButton } from '@element-plus/icons-vue'
	import { reactive, ref, onMounted, watch } from 'vue'
	import { useRouter } from 'vue-router'
	import { logout } from '@/service/login'
	import { getProfile } from '@/service/user'

	const router = useRouter()
	const data = reactive({
		uID: localStorage.getItem('userID') ?? null,
		logined: localStorage.getItem('cookie') ? true : false,
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

	const gologout = async () => {
		const res = await logout()
		if (res.code == 200) {
			localStorage.clear()
			const timer = setTimeout(() => {
				router.push({ name: 'login' })
				clearTimeout(timer)
			}, 1000)
		} else {
			ElNotification({
				title: '退出登录失败',
				type: 'error',
			})
		}
	}

	watch(
		() => data.logined,
		() => {
			init(data.uID)
		}
	)
	watch(localStorage.getItem('cookie'), newVal => {
		data.logined = newVal
	})
</script>

<style lang="less" scoped>
	@import url(@/base.less);
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
				#setWH(22vw, 40px);
				font-size: 15px;

				outline: none;
				border: none;
				border-radius: 30px;
				border: 1px solid @colorInfo;

				margin-left: 15px;
				padding: 0px 20px;

				background-image: url(../assets/search.svg);
				background-repeat: no-repeat;
				background-size: 22px 22px;
				background-position: 10px;
			}
		}
		.right {
			.el-icon {
				vertical-align: middle;
				margin-right: 20px;
				cursor: pointer;
			}
			.el-button {
				margin-right: 20px;
				font-weight: bold;
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
