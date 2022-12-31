<template>
	<div class="table">
		<ul>
			<li></li>
			<li
				v-for="(item, index) in data.playlist"
				:key="index"
			>
				<span>{{ index }}</span>
				<img
					:src="item.al.picUrl"
					:title="item.name"
				/>
				<div class="songDetails">
					<h4>{{ item.name }}</h4>
					<p v-for="artist in item.ar">{{ artist.name }}</p>
				</div>
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
		init(props.listID)
	})
	const init = async id => {
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

<style lang="less" scoped>
	@import url(../base.less);
	.songDetails {
		#setWH(110px, 55px);
		font-size: medium;
		margin: 25px 5px 10px 10px;

		overflow: hidden;
		white-space: nowrap;
		p {
			margin-top: 3px;
			font-size: small;
			opacity: 0.3;
		}
	}
</style>
