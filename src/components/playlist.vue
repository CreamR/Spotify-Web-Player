<template>
	<div class="playlist">
		<div class="listInfo">
			<img
				:src="data.imgURL"
				:title="data.listTitle"
			/>
			<div class="info">
				<p>歌单</p>
				<h1>{{ data.listTitle }}</h1>
				<p>创建者 - {{ data.creator }}</p>
				<p>歌曲 · {{ data.count }} &nbsp | &nbsp 播放 · {{ data.view }}</p>
			</div>
		</div>
		<div class="controlBar">
			<el-button
				type="success"
				circle
				:icon="Headset"
				size="large"
			></el-button>
			<img
				src="../assets/heartFill.svg"
				title="喜欢"
				width="35"
				class="heart"
			/>
			<el-icon
				size="22"
				color="darkgrey"
				><QuestionFilled
			/></el-icon>
		</div>
	</div>
</template>

<script setup>
	import { Headset, QuestionFilled } from '@element-plus/icons-vue'
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { getPlaylistDetail } from '../service/playlist'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		playlist: [],
		imgURL: '',
		listTitle: '',
		count: 0,
		view: 0,
		creator: '',
	})
	onMounted(() => {
		init()
	})
	const init = async () => {
		const listID = route.params.id ?? null
		if (listID) {
			const res = await getPlaylistDetail(listID)

			data.playlist = res
			data.imgURL = route.query.playlistIMG
			data.listTitle = route.query.listTitle
			data.count = route.query.count
			data.view = route.query.view
			data.creator = route.query.creator

			console.log(res)
		}
	}

	watch(
		() => route.params.id,
		async () => {
			init()
		}
	)
</script>

<style lang="less" scoped>
	@import url(../base.less);
	.playlist {
		.listInfo {
			#setFlex(space-start);
			img {
				#setWH(220px, 220px);
				margin: 10px 15px;
				box-shadow: @BGShadow;
			}
			.info {
				height: 220px;
				h1 {
					font-size: 3vw;
					margin-bottom: 45px;
				}
				p:nth-child(1) {
					font-size: 14px;
					margin-top: 5px;
					margin-bottom: 25px;
				}
				p:nth-child(3) {
					font-size: 16px;
					color: @colorInfo;

					transition: all 0.2s ease;
					cursor: pointer;
					&:hover {
						color: @colorSuccess;
					}
					&:active {
						color: @colorInfo;
					}
				}
				p:nth-child(4) {
					font-size: 15px;
					margin-top: 10px;
				}
			}
		}
		.controlBar {
			#setFlex(flex-start);
			margin: 30px 15px;
			.el-button {
				margin-right: 30px;
				transform: scale(1.3);
				font-size: larger;
			}
			.heart {
				margin-right: 20px;

				transition: all 0.2s ease;
				cursor: pointer;
				&:hover {
					transform: scale(1.2);
				}
				&:active {
					transform: scale(1);
				}
			}
		}
	}
</style>
