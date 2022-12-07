<template>
	<div class="playlist">
		<img :src="data.imgURL" />
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { getPlaylistDetail } from '../service/playlist'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		playlist: [],
		imgURL: '',
	})
	onMounted(() => {
		init()
	})
	const init = async () => {
		// 若为监听传值则正常刷新，若为路由传值则进行初始化
		const listID = route.params.id ?? null
		if (listID) {
			const res = await getPlaylistDetail(listID)
			data.playlist = res
			data.imgURL = route.query.playlistIMG

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

<style lang="less" scoped></style>
