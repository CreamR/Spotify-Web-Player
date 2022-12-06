<template>
	<div class="playlist"></div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { getPlaylistDetail } from '../service/playlist'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		playlist: [],
	})
	onMounted(() => {
		init()
	})
	const init = async () => {
		const listID = route.params.id
		const res = await getPlaylistDetail(listID)
		data.playlist = res
		console.log(res)
	}
</script>

<style lang="less" scoped></style>
