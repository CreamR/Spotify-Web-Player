<template>
	<div class="playlist">
		<div class="listInfo">
			<img
				:src="data.imgURL"
				:title="data.listTitle"
			/>
			<div class="info">
				<h1>{{ data.listTitle }}</h1>
			</div>
		</div>
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
		listTitle: '',
	})
	onMounted(() => {
		init()
	})
	const init = async () => {
		const listID = route.params.id ?? null
		if (listID) {
			const res = await getPlaylistDetail(listID)
			data.playlist = res

			data.imgURL = route.query.playlistIMG
			data.listTitle = route.query.listTitle
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

<style lang="less" scoped>
	@import url(../base.less);
	.playlist {
		img {
			#setWH(250px, 250px);
			margin: 30px 35px;
			box-shadow: @BGShadow;
		}
	}
</style>
