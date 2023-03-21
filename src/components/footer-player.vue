<template>
	<div class="player">
		<div class="left">
			<img
				src="../assets/test/headImg.svg"
				:title="ss"
				width="55"
				height="55"
			/>
			<div class="songDetails">
				<h4>测试歌曲</h4>
				<p>这是个小测试</p>
			</div>
			<img
				src="../assets/heart.svg"
				title="喜欢"
				width="30"
				height="30"
				style="cursor: pointer"
				@click="islike = true"
				v-if="!islike"
			/>
			<img
				src="../assets/heartFill.svg"
				title="取消喜欢"
				width="30"
				height="30"
				@click="islike = false"
				style="cursor: pointer"
				v-else
			/>
		</div>
		<div class="middle">
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
		</div>
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
		></audio>
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
	@import url(../base.less);
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
			text-align: center;
			.controls {
				#setFlex(center);
				.el-icon {
					margin: 0 6px 10px;
					cursor: pointer;
					transition: all 150ms ease;
					&:hover {
						transform: translateY(-1px);
					}
				}
			}
			.progress {
				input {
					width: 35vw;
				}
			}
		}
		.right {
			#setFlex(space-between);
			.el-icon {
				margin-right: 10px;
			}
			input {
				width: 5vw;
			}
		}
	}
</style>
