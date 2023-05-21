<template>
	<el-container>
		<el-aside>
			<vAside class="aside"></vAside>
		</el-aside>

		<el-main>
			<vTopBar class="topBar"></vTopBar>
			<!-- 解决fix脱标-->
			<div class="wrap"></div>
			<router-view class="body"></router-view>
		</el-main>
	</el-container>

	<el-footer>
		<vPlayer class="player"></vPlayer>
	</el-footer>
</template>

<script setup>
	import vAside from '@/view/index/aside.vue'
	import vTopBar from '@/view/index/main-topBar.vue'
	import vPlayer from '@/view/index/footer-player.vue'

	import { onMounted, ref, reactive } from 'vue'

	const data = reactive({})

	onMounted(() => {})
</script>

<style lang="less" scoped>
	@import url(../base.less);
	.el-container {
		position: relative;
		#setWH(100vw, 90vh);
		.el-aside {
			#setWH(245px, 90vh);
			.aside {
				#setWH(100%, 100%);
			}
		}
		.el-main {
			margin: 0;
			padding: 0;
			overflow-x: hidden;
			.topBar {
				position: fixed;
				#setWH(calc(100vw - 245px), 65px);
				z-index: 999;
			}
			.wrap {
				#setWH(calc(100vw - 245px), 65px);
			}
			.body {
				color: white;
				background-image: linear-gradient(rgb(32, 32, 32), rgb(20, 20, 20));
				min-height: calc(100vh - 10vh - 65px);
				padding: 20px 30px;
			}
		}
	}
	.wrap {
		#setWH(100vw, 10vh);
	}
	.el-footer {
		#setWH(100vw, 10vh);

		padding: 0;
		border: 1px solid;
		border-image-source: radial-gradient(
					54.8% 53% at 50% 50%,
					rgba(57, 67, 83, 0.3) 0%,
					rgba(69, 71, 74, 0) 100%
				)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
			radial-gradient(
					60% 51.57% at 50% 50%,
					rgba(207, 207, 207, 0.8) 0%,
					rgba(207, 207, 207, 0) 100%
				)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
			radial-gradient(69.43% 69.43% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)
				/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

		.player {
			position: fixed;
			#setWH(100vw, 10vh);
		}
	}
</style>
