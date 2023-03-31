<template>
	<div class="searchRes">
		<section
			class="empty"
			v-if="data.isEmpty"
		>
			<h1>未找到 {{ $route.query.keywords }} 的搜索结果</h1>
			<br />
			<p>请确保您的关键字拼写正确，或者尝试使用其他关键字</p>
		</section>

		<div
			class="content"
			v-else
		>
			<div class="searchNavbar">
				<el-button
					round
					:class="{ active: data.isActive == 1 }"
					@click="data.isActive = 1"
					color="rgb(44,44,44)"
					>歌曲</el-button
				>
				<el-button
					round
					:class="{ active: data.isActive == 2 }"
					@click="data.isActive = 2"
					color="rgb(44,44,44)"
					>艺人</el-button
				><el-button
					round
					:class="{ active: data.isActive == 3 }"
					@click="data.isActive = 3"
					color="rgb(44,44,44)"
					>歌单</el-button
				>
				<el-button
					round
					:class="{ active: data.isActive == 4 }"
					@click="data.isActive = 4"
					color="rgb(44,44,44)"
					>专辑</el-button
				>
				<el-button
					round
					:class="{ active: data.isActive == 5 }"
					@click="data.isActive = 5"
					color="rgb(44,44,44)"
					>用户</el-button
				>
			</div>

			<!-- <vSearchSongTable :songsList="data.searchResList"></vSearchSongTable> -->
			<!-- <vSearchArtistTable :artistList="data.searchResList"></vSearchArtistTable> -->
			<!-- new write method -->
			<router-view :dataList="data.searchResList"></router-view>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { search } from '/src/service/search'
	import vSearchSongTable from '/src/components/consist/searchSongTable.vue'
	import vSearchArtistTable from '/src/components/consist/searchArtistTable.vue'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		searchResList: [],
		isEmpty: false,
		// 控制类别按钮点击后变色
		isActive: 1,
	})

	onMounted(() => {
		init(route.query.keywords)
	})
	// 根据传入的type搜索指定类型的结果
	const init = async (key, type) => {
		const res = await search(key, type)
		console.log(res)

		// 判断返回对象是否空
		if (Object.keys(res.result).length != 0) {
			data.searchResList = res.result
			data.isEmpty = false
		} else {
			data.isEmpty = true
		}
	}

	watch([() => route.query.keywords, () => data.isActive], async ([newVal]) => {
		switch (data.isActive) {
			case 1:
				await init(newVal, 1)
				if (route.name != 'searchResSong') router.push({ name: 'searchResSong' })
				break
			case 2:
				await init(newVal, 100)
				if (route.name != 'searchResArtist') router.push({ name: 'searchResArtist' })
				break
			case 3:
				await init(newVal, 1000)
				if (route.name != 'searchResPlaylist') router.push({ name: 'searchResPlaylist' })
				break
			case 4:
				await init(newVal, 10)
				if (route.name != 'searchResAlbum') router.push({ name: 'searchResAlbum' })
				break
			case 5:
				await init(newVal, 1002)
				if (route.name != 'searchResUser') router.push({ name: 'searchResUser' })
				break
			default:
				router.push({ name: 'error' })
		}
	})
</script>

<style lang="less" scoped>
	@import url(../base.less);
	.active {
		color: black;
		background-color: white;
	}

	.searchRes {
		// 无搜索结果时的样式
		.empty {
			text-align: center;
			margin-top: 18vw;
		}
		// 有搜索结果时的样式
		.content {
			.searchNavbar {
				position: sticky;
				margin-bottom: 10px;
				.el-button {
					transition: all 200ms ease;
					margin-right: 10px;
				}
			}
		}
	}
</style>
