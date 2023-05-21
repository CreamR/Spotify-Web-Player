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
			<div class="left">
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
			</div>

			<div class="right">
				<el-popover
					placement="left"
					:width="335"
					trigger="hover"
					effect="dark"
					content="此功能消耗客户机性能，注意歌单内数据不要过大"
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
					v-model="data.keywords"
					@input="filterSong"
					@focus="isExpand(true)"
					@blur="isExpand(false)"
				/>
			</div>
		</div>
		<div class="tableList">
			<vTable
				v-if="data.searchRes.length != 0"
				:dataList="data.keywords.length == 0 ? data.songsList : data.searchRes"
			></vTable>
			<p
				style="text-align: center; margin-top: 100px"
				v-else
			>
				关键字 <strong>{{ data.keywords }}</strong> 未找到
			</p>
		</div>
	</div>
</template>

<script setup>
	import { Headset, QuestionFilled, Delete } from '@element-plus/icons-vue'
	import { onMounted, reactive, ref, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import vTable from '@/components/table/table-single.vue'
	import { getPlaylistDetail } from '@/service/playlist'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		songsList: [],
		// 为搜索结果数组填充数据，否则初始时搜索结果数组长度为0，歌单数据无法展示
		// 当搜索发生时此数组会被覆盖，从而达到若搜索不到关键字时提示关键字未找到的错误信息
		searchRes: [''],
		imgURL: '',
		listTitle: '',
		count: 0,
		view: 0,
		creator: '',
		keywords: '',
	})

	onMounted(() => {
		init(route.params.id)
	})
	const init = async id => {
		const res = await getPlaylistDetail(id)

		// 后端传来的数据与table组件不匹配，导致组件无法复用，此处将后端数据不匹配字段替代之
		res.songs = res.songs.map(song => ({
			...song,
			album: song.al,
			artists: song.ar,
			duration: song.dt,
		}))
		data.songsList = res.songs

		if (id) {
			data.imgURL = route.query.playlistIMG
			data.listTitle = route.query.listTitle
			data.count = route.query.count
			data.view = route.query.view
			data.creator = route.query.creator
		}
	}

	const filterSong = () => {
		// 存放搜索结果数组，否则搜索结果数组会覆盖原数组，导致后续无法继续搜索
		data.searchRes = data.songsList.filter(item => item.name.includes(data.keywords))
	}
	const inputing = ref()
	const isExpand = isFocus => {
		if (isFocus) inputing.value.style.width = '300px'
		else inputing.value.style.width = '180px'
	}

	watch(
		() => route.params.id,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped>
	@import url(@/base.less);
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

					cursor: pointer;
					#trs-color(@colorSuccess, @colorInfo);
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
					font-size: larger;

					margin-right: 30px;
					transform: scale(1.2);
				}
				.heart {
					margin-right: 20px;

					cursor: pointer;
					transition: all 150ms ease;
					&:hover {
						transform: scale(1.2);
					}
					&:active {
						transform: scale(1);
					}
				}
				.delete {
					cursor: pointer;
					#trs-color(@colorDanger, @colorInfo);
				}
			}
			.right {
				.el-icon {
					vertical-align: middle;
				}
				.search {
					width: 180px;
					border: none;
					border-bottom: 1px solid @colorInfo;

					font-size: 12px;
					color: @colorSuccess;

					margin-left: 15px;
					padding: 8px 35px;

					background-image: url(../assets/searchWhite.svg);
					background-size: 22px 22px;
					background-position: 3px;
					background-repeat: no-repeat;
					background-color: rgb(28, 28, 28);

					outline: none;
					transition: all 250ms ease;
				}
			}
		}
	}
</style>
