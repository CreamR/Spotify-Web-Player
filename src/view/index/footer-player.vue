<template>
	<div class="player">
		<div class="left">
			<img
				:src="curSingle.singleDetail.imgUrl"
				:title="ss"
				width="52"
				height="52"
			/>
			<div class="songDetails">
				<h4>{{ curSingle.singleDetail.title }}</h4>
				<p>{{ curSingle.singleDetail.artist }}</p>
			</div>
			<img
				src="@/assets/heart.svg"
				title="喜欢"
				width="30"
				height="30"
				style="cursor: pointer"
				@click="islike = true"
				v-if="!islike"
			/>
			<img
				src="@/assets/heartFill.svg"
				title="取消喜欢"
				width="30"
				height="30"
				@click="islike = false"
				style="cursor: pointer"
				v-else
			/>
		</div>

		<media-controller
			audio
			class="middle"
			id="myController"
		>
			<audio
				slot="media"
				:src="curSingle.singleUrl"
			></audio>
			<media-control-bar class="media-player">
				<media-play-button class="selectAll"></media-play-button>
				<media-time-display
					show-duration
					class="selectAll"
				></media-time-display>
				<media-time-range class="selectAll"></media-time-range>
			</media-control-bar>
		</media-controller>

		<div class="right">
			<el-icon
				color="white"
				size="30"
				><Expand
			/></el-icon>
			<el-icon
				color="white"
				size="30"
				@click="volume = 0"
				v-if="volume != 0"
				><Microphone
			/></el-icon>
			<el-icon
				color="white"
				size="30"
				@click="volume = 30"
				v-else
				><Mute
			/></el-icon>

			<media-volume-range mediacontroller="myController"></media-volume-range>
		</div>
	</div>
</template>

<script setup>
	import {
		Operation,
		CaretLeft,
		CaretRight,
		VideoPause,
		VideoPlay,
		Odometer,
		Microphone,
		Mute,
		Expand,
	} from '@element-plus/icons-vue'
	import { ref, onMounted, watch } from 'vue'
	import { useCurSingle } from '@/store/curSingle'
	import 'media-chrome'

	const curSingle = useCurSingle()

	// 操作DOM调节音量
	const audio = ref()
	// 数据绑定
	const volume = ref()
	const islike = ref(false)
	const isPlay = ref(false)

	watch(volume, newVal => {
		// 获取音量 由于audio标签在最值设置为0-1区间内时滑动会跳帧, 所以将最值定位0-100然后将其转换为0-1的小数即可
		audio.value.volume = newVal / 100
		console.log(volume)
	})
</script>

<style lang="less" scoped>
	@import url(@/base.less);
	.player {
		#setFlex(space-between);
		background-color: rgb(24, 24, 24);

		padding: 22px;
		.left {
			color: whitesmoke;
			#setFlex(space-between);
			.songDetails {
				#setWH(110px, 55px);
				font-size: medium;

				// margin: 25px 5px 10px 10px;

				overflow: hidden;
				white-space: nowrap;
				p {
					font-size: small;

					margin-top: 3px;
					opacity: 0.3;
				}
			}
		}
		.middle {
			.media-player {
				width: 45vw;
				background-color: rgb(24, 24, 24);

				& > .selectAll {
					margin-right: 10px;
					&:hover {
						background-color: rgb(24, 24, 24);
					}
				}
			}
		}
		.right {
			#setFlex(space-between);
			.el-icon {
				margin-right: 10px;
			}
			input {
				width: 80px;
			}
		}
	}
</style>
