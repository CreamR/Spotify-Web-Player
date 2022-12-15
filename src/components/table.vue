<template>
	<div class="table">
		<ul>
			<li>{{ props.listID }}</li>
		</ul>
	</div>
</template>

<script setup>
	import { onBeforeUpdate, onMounted, reactive } from 'vue'
	import { getPlaylistDetail } from '../service/playlist'

	const props = defineProps({
		listID: Number | String,
	})
	const data = reactive({ playlist: [] })

	onBeforeUpdate(() => {
		init()
	})
	const init = async () => {
		const res = await getPlaylistDetail(props.listID)
		data.playlist = res.songs
		console.log(res)
	}
</script>

<style lang="less" scoped></style>
