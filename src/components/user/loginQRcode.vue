<template>
	<div class="loginQRcode">
		<div class="logo">
			<img
				src="../../../logo.svg"
				title="Spotify"
				width="77"
				class="spotify"
			/>
			<el-icon><CloseBold /></el-icon>
			<img
				src="../../../cloud-music.svg"
				title="Could-Music"
				width="88"
				class="cloudmusic"
			/>
		</div>
		<article></article>
		<!-- QRcode section -->
		<img
			:src="data.QRcodeUrl"
			width="200"
			height="200"
			class="QRcode"
		/>

		<el-button
			@click="init"
			class="refresh"
			>刷新二维码</el-button
		>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	// import {} from '@src'
	import { getUrl } from '../../function/base64toBolb'
	import { getKey, getQRcode, check } from '../../service/login'

	const data = reactive({
		key: '',
		QRcodeUrl: '',
	})

	onMounted(() => {
		init()
	})
	const timeStamp = Date.now()
	const init = async () => {
		const res = await getKey(timeStamp)
		if (res.code == 200) {
			data.key = res.data.unikey
		}
	}

	const initQRcode = async key => {
		console.log(data.key)
		const res = await getQRcode(key, timeStamp)
		data.QRcodeUrl = getUrl(res.data.qrimg)
		console.log(res)
	}

	const checkStatus = async key => {
		const res = await check(key, timeStamp)
		switch (res.code) {
			case 800:
				// 二维码过期
				break
			case 802:
				// 待确认
				break
			case 803:
				// 登录成功
				break
			default:
			// 登录失败
		}
		console.log(res)
	}

	watch(
		() => data.key,
		newVal => {
			initQRcode(newVal, timeStamp)
		}
	)
</script>

<style lang="less" scoped>
	@import url(../../base.less);
	.loginQRcode {
		color: white;
		text-align: center;
		.logo {
			margin-top: 100px;
			.spotify {
				vertical-align: middle;
				margin-right: 22px;
			}
			.cloudmusic {
				vertical-align: middle;
				margin-left: 15px;
			}
		}
		article {
			display: block;
			width: 300px;
			border-bottom: 1px solid @colorInfo;

			margin: 45px auto;
		}
		.QRcode {
			border-radius: 10%;
		}
		.refresh {
			display: block;
			text-align: center;
		}
	}
</style>
