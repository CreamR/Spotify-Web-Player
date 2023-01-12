<template>
	<div class="playlist">
		<section class="listInfo">
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
		</section>
		<section class="controlBar">
			<section class="left">
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
					class="delete"
					><Delete
				/></el-icon>
			</section>

			<section class="right">
				<el-popover
					placement="left"
					:width="310"
					trigger="hover"
					effect="dark"
					content="此项功能将消耗客户机性能"
				>
					<template #reference>
						<el-icon
							size="22"
							color="darkgrey"
							><QuestionFilled
						/></el-icon>
					</template>
				</el-popover>
				<input
					type="text"
					class="search"
					ref="inputing"
					placeholder="点此搜索歌单内歌曲"
					@focus="isExpand(true)"
					@blur="isExpand(false)"
				/>
			</section>
		</section>
		<section class="tableList">
			<vTable :listID="data.listID"></vTable>
		</section>
	</div>
</template>

<script setup>
	import { Headset, QuestionFilled, Delete } from '@element-plus/icons-vue'
	import { onMounted, reactive, ref, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { getPlaylistDetail } from '../service/playlist'
	import vTable from './table.vue'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		listID: null,
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
		data.listID = route.params.id ?? null
		if (data.listID) {
			data.imgURL = route.query.playlistIMG
			data.listTitle = route.query.listTitle
			data.count = route.query.count
			data.view = route.query.view
			data.creator = route.query.creator
		}
	}

	watch(
		() => route.params.id,
		async () => {
			init()
		}
	)

	const inputing = ref()
	const isExpand = isFocus => {
		if (isFocus) inputing.value.style.width = '300px'
		else inputing.value.style.width = '180px'
	}
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
			#setFlex(space-between);
			margin: 30px 20px;
			.left {
				#setFlex(flex-start);
				.el-button {
					margin-right: 30px;
					transform: scale(1.3);
					font-size: larger;
				}
				.heart {
					margin-right: 20px;

					transition: all 0.15s ease;
					cursor: pointer;
					&:hover {
						transform: scale(1.2);
					}
					&:active {
						transform: scale(1);
					}
				}
				.delete {
					cursor: pointer;
					transition: all 0.2s ease;
					&:hover {
						color: @colorDanger;
					}
					&:active {
						color: @colorInfo;
					}
				}
			}
			.right {
				.el-icon {
					vertical-align: middle;
				}
				.search {
					width: 180px;
					margin-left: 15px;
					padding: 8px 35px;

					font-size: 12px;

					background-image: url(../assets/searchWhite.svg);
					background-repeat: no-repeat;
					background-size: 22px, 22px;
					background-position: 3px;
					background-color: rgb(28, 28, 28);
					color: @colorSuccess;

					outline: none;
					border: none;
					border-bottom: 1px solid @colorInfo;

					transition: all 0.3s ease;
				}
			}
		}
	}
</style>
