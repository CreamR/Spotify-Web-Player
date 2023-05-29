<template>
	<div class="recSongs">
		<div class="listInfo">
			<img
				src="@/assets/dailyLike.svg"
				title="每日推荐"
			/>
			<div class="info">
				<h1>每日推荐歌曲</h1>
				<p>根据你的音乐口味生成, 每天6:00更新</p>
			</div>
		</div>

		<vTable :dataList="data.dataList"></vTable>
	</div>
</template>

<script setup>
	import { reactive, onMounted, watch } from 'vue'
	import { getGreatSingle } from '@/service/single'
	import vTable from '@/components//table/table-single.vue'

	const data = reactive({
		dataList: [],
		recReasons: [],
	})

	onMounted(() => {
		init()
	})
	const init = async () => {
		const res = await getGreatSingle()

		res.data.dailySongs = res.data.dailySongs.map(song => ({
			...song,
			album: song.al,
			artists: song.ar,
			duration: song.dt,
		}))

		console.log(res)
		data.dataList = res.data.dailySongs
		data.recReasons = res.data.recommendReasons
	}
</script>

<style lang="less" scoped>
	@import url(@/base.less);
	.recSongs {
		.listInfo {
			display: flex;
			align-items: center;

			padding: 15px 30px;
			.info {
				margin-left: 20px;
				p {
					color: @colorInfo;
					font-size: small;

					margin-top: 5px;
				}
			}
		}
	}
</style>
