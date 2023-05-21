<template>
	<div class="profile">
		<h1 class="title">用户个人信息</h1>

		<el-avatar
			:size="100"
			fit="cover"
			:src="data.userData.photoUrl"
		/>
		<h3 class="userName">{{ data.userData.name }}</h3>
		<p class="signature">{{ data.userData.signature }}</p>

		<div class="userInfo">
			<div class="wrap">
				<p class="index">{{ data.userData.level }}</p>
				<p class="desc">等级</p>
			</div>
			<div class="wrap">
				<p class="index">{{ data.userData.listenSongs }}</p>
				<p class="desc">听过歌曲</p>
			</div>
			<div class="wrap clear">
				<p class="index">{{ data.userData.OS }}</p>
				<p class="desc">OS版本</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { reactive, onMounted } from 'vue'
	import { useRouter } from 'vue-router'
	import { getProfile } from '@/service/user'
	import { isDeviceType } from '@/function/isDeviceType'

	const router = useRouter()

	const data = reactive({
		// 是否可以修改用户资料
		type: false,
		userData: {
			name: '',
			signature: '',
			level: '',
			listenSongs: '',
			OS: '',
			photoUrl: '',
		},
	})

	onMounted(() => {
		init(localStorage.getItem('userID'))
	})

	const init = async uID => {
		const res = await getProfile(uID)

		data.userData.photoUrl = res.profile.avatarUrl
		data.userData.name = res.profile.nickname
		data.userData.signature = res.profile.signature
		data.userData.level = res.level
		data.userData.listenSongs = res.listenSongs

		data.userData.OS = isDeviceType()
	}
</script>

<style lang="less" scoped>
	@import url(@/base.less);
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
			font-size: small;
		}
		.userInfo {
			font-weight: bold;

			.wrap {
				display: inline-block;
				margin-top: 30px;
				padding: 10px 50px;
				border-right: 1px solid @colorInfo;
				.index {
					margin-bottom: 10px;
					font-size: larger;
				}
				.desc {
					color: @colorInfo;
					font-size: medium;
				}
			}
			.clear {
				border: none;
			}
		}
	}
</style>
