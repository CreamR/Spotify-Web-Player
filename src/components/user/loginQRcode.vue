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
		<QRCodeVue3
			:width="200"
			:height="200"
			value="https://scholtz.sk"
			:qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
			:imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
			:dotsOptions="{
				type: 'dots',
				color: '#26249a',
				gradient: {
					type: 'linear',
					rotation: 0,
					colorStops: [
						{ offset: 0, color: '#26249a' },
						{ offset: 1, color: '#26249a' },
					],
				},
			}"
			:backgroundOptions="{ color: '#ffffff' }"
			:cornersSquareOptions="{ type: 'dot', color: '#000000' }"
			:cornersDotOptions="{ type: undefined, color: '#000000' }"
			fileExt="png"
			:download="true"
			myclass="my-qur"
			imgclass="img-qr"
			downloadButton="my-button"
			:downloadOptions="{ name: 'vqr', extension: 'png' }"
		/>
	</div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	// import {} from '@src'
	import QRCodeVue3 from 'qrcode-vue3'
	import { getKey } from '../../service/login'

	onMounted(() => {
		init()
	})
	const init = async () => {
		const res = await getKey(Date.now())
		console.log(res)
	}
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
	}
</style>
