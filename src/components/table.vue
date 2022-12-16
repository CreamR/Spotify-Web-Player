<template>
	<div class="table">
		<ul
			v-for="(item, index) in data.playlist"
			:key="index"
		>
			<li></li>
		</ul>
	</div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	import { getPlaylistDetail } from '../service/playlist'

	const props = defineProps({
		listID: Number,
	})
	const data = reactive({ playlist: [] })

	onMounted(() => {
		init()
	})
	const init = async () => {
		// 由于父组件playlist加载时，props并未传入，所以这里需要延迟加载并判断传来的props是否有效
		setTimeout(async () => {
			if (props.listID) {
				const res = await getPlaylistDetail(props.listID)
				data.playlist = res.songs
				console.log(res)
			}
		}, 1024)
	}
</script>

<style lang="less" scoped></style>
