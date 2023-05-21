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
		<p>{{ data.tipText }}</p>
		<p class="tips">由于登录过程调用了加密算法，响应较慢请耐心等待</p>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter } from 'vue-router'
	// import {} from '@src'
	import { getUrl } from '@/function/base64toBolb'
	import { getKey, getQRcode, check } from '@/service/login'
	import { getUserInfo } from '@/service/user'

	const router = useRouter()

	const data = reactive({
		key: null,
		QRcodeUrl: '',
		loading: true,
		tipText: '扫描二维码登录',
	})

	onMounted(() => {
		init()

		setInterval(() => {
			if (data.key) checkStatus(data.key)
		}, 2000)
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
		console.log(res)
		switch (res.code) {
			case 800:
				// 二维码过期
				data.tipText = '二维码已过期'
				break
			case 802:
				// 待确认
				data.tipText = '二维码待确认'
				break
			case 803:
				// 登录成功
				data.tipText = '登录成功, 即将跳转...'

				// init userInfo
				const res2 = await getUserInfo(res.cookie)
				localStorage.setItem('cookie', res.cookie)
				localStorage.setItem('userID', res2.account.id)

				// 防抖
				if (localStorage.getItem('cookie'))
					setTimeout(() => {
						router.push({ name: 'main' })
					}, 2000)
				break
		}
	}

	watch(
		() => data.key,
		newVal => {
			initQRcode(newVal, timeStamp)
		}
	)
</script>

<style lang="less" scoped>
	@import url(@/base.less);
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
		.tips {
			margin: 10px;

			color: @colorInfo;
			font-size: small;
		}
	}
</style>
