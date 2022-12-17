<template>
	<div class="table">
		<article></article>
		<ul>
			<li
				v-for="(item, index) in data.playlist"
				:key="index"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { getPlaylistDetail } from '../service/playlist'

	const props = defineProps({
		listID: Number,
	})
	const data = reactive({ playlist: [] })

	onMounted(() => {
		setTimeout(() => {
			init(props.listID)
		}, 1024)
	})
	const init = async id => {
		// 由于父组件playlist加载时，props并未传入，所以这里需要延迟加载并判断传来的props是否有效

		console.log(id)
		if (id) {
			const res = await getPlaylistDetail(id)
			data.playlist = res.songs
			console.log(res)
		}
	}
	watch(
		() => props.listID,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped></style>
