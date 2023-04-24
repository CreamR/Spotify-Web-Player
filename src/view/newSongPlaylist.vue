<template>
	<div class="newSongPlaylist"></div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRoute } from 'vue-router'
	import { getNewSongs } from '/src/service/playlist'

	const route = useRoute()

	const data = reactive({
		dataList: [],
	})

	onMounted(() => {
		init(route.params.type)
	})
	const init = async type => {
		const res = await getNewSongs(type)
		console.log(res)
	}

	watch(
		() => route.params.type,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped></style>
