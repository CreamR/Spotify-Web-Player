<template>
	<div class="newSongPlaylist">
		<h1>新歌速递 - {{ data.type }}</h1>
		<vTable :dataList="data.dataList"></vTable>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRoute } from 'vue-router'
	import { getNewSongs } from '@/service/playlist'
	import vTable from '@/components/table/table-single.vue'

	const route = useRoute()

	const data = reactive({
		dataList: [],
		type: '',
	})

	onMounted(() => {
		init(route.params.type)
	})
	const init = async type => {
		const res = await getNewSongs(type)
		data.dataList = res.data

		switch (type) {
			case '0':
				data.type = '全部'
				break
			case '8':
				data.type = '日本'
				break
			case '7':
				data.type = '华语'
				break
			case '96':
				data.type = '欧美'
				break
			case '16':
				data.type = '韩国'
				break
			default:
				data.type = null
				break
		}
	}

	watch(
		() => route.params.type,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped>
	.newSongPlaylist {
		h1 {
			padding: 10px 30px;
		}
	}
</style>
