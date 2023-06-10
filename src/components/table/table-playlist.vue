<template>
	<div class="table">
		<el-row gutter="30">
			<el-col
				v-for="(item, index) in props.dataList"
				:key="index"
				:span="12"
				:md="8"
				:lg="6"
				:xl="4"
				class="playlistInfo"
				@click="
					$router.push({
						path: `/playlist/${item.id}`,
						query: {
							playlistIMG: item.picUrl,
							listTitle: item.name,
							count: item.trackCount,
							view: item.playcount,
							creator: item.creator.nickname,
						},
					})
				"
			>
				<vPlaylistCard :data="{ picUrl: item.picUrl, title: item.name }"></vPlaylistCard>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
	import vPlaylistCard from '@/components/playlist-card.vue'
	const props = defineProps({
		dataList: [],
	})
</script>
