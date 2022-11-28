<template>
	<div class="player">
		<div class="left">
			<img
				src="../assets/test/img.svg"
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
				v-if="true"
			/>
			<img
				src="../assets/heartFill.svg"
				title="取消喜欢"
				width="30"
				height="30"
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
					><VideoPause
				/></el-icon>
				<el-icon
					color="white"
					size="30"
					v-if="false"
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
				><Microphone
			/></el-icon>
			<el-icon
				color="white"
				size="30"
				v-if="false"
				><Mute
			/></el-icon>
			<input
				type="range"
				name=""
				id=""
			/>
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
</script>

<style lang="less" scoped>
	@import url(../base.less);
	.player {
		#setFlex(space-between);
		padding: 16px 24px;
		background-color: rgb(24, 24, 24);
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
					margin-top: 3px;
					font-size: small;
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
					transition: all 0.2s ease;
					&:hover {
						transform: translateY(-2px);
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
