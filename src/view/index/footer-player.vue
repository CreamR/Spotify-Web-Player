<template>
	<div class="player">
		<div class="left">
			<img
				src="/src/assets/test/headImg.svg"
				:title="ss"
				width="55"
				height="55"
			/>
			<div class="songDetails">
				<h4>测试歌曲</h4>
				<p>这是个小测试</p>
			</div>
			<img
				src="/src/assets/heart.svg"
				title="喜欢"
				width="30"
				height="30"
				style="cursor: pointer"
				@click="islike = true"
				v-if="!islike"
			/>
			<img
				src="/src/assets/heartFill.svg"
				title="取消喜欢"
				width="30"
				height="30"
				@click="islike = false"
				style="cursor: pointer"
				v-else
			/>
		</div>
		<!-- <div class="middle">
			<div class="controls">
				<el-icon
					color="white"
					size="20"
					><Odometer
				/></el-icon>
				<el-icon
					color="white"
					size="20"
					><CaretLeft
				/></el-icon>

				<el-icon
					color="white"
					size="30"
					v-if="isPlay"
					@click="isPlay = false"
					><VideoPause
				/></el-icon>
				<el-icon
					color="white"
					size="30"
					v-else
					@click="isPlay = true"
					><VideoPlay
				/></el-icon>

				<el-icon
					color="white"
					size="20"
					><CaretRight
				/></el-icon>
				<el-icon
					color="white"
					size="20"
					><Operation
				/></el-icon>
			</div>
			<div class="progress">
				<span></span>
				<input
					type="range"
					name=""
					id=""
				/>
				<span></span>
			</div>
		</div> -->
		<!-- <div class="right">
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
			<input
				type="range"
				v-model="volume"
				min="0"
				max="100"
			/>
		</div>
		<audio
			ref="audio"
			src="../assets/test/audioTest.mp3"
		></audio> -->
		<media-controller
			audio
			class="middle"
		>
			<audio
				slot="media"
				ref="audio"
				src="https://stream.mux.com/O4h5z00885HEucNNa1rV02wZapcGp01FXXoJd35AHmGX7g/audio.m4a"
			></audio>
			<media-control-bar class="media-player">
				<media-play-button class="selectAll"></media-play-button>
				<media-time-display
					show-duration
					class="selectAll"
				></media-time-display>
				<media-time-range class="selectAll"></media-time-range>
				<media-playback-rate-button class="selectAll"></media-playback-rate-button>
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
			<!-- <input
				type="range"
				v-model="volume"
				min="0"
				max="100"
			/> -->
			<media-volume-range style="width: 100px"></media-volume-range>
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
	import 'media-chrome'

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
	@import url(/src/base.less);
	.player {
		#setFlex(space-between);
		background-color: rgb(24, 24, 24);

		padding: 16px 24px;
		.left {
			color: whitesmoke;
			#setFlex(space-between);
			.songDetails {
				#setWH(110px, 55px);
				font-size: medium;

				margin: 25px 5px 10px 10px;

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
