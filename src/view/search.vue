<template>
	<div class="search">
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
			<vCategoryBar
				:dataList="['歌曲', '艺人', '歌单', '专辑', '用户']"
				@getIndex="handleIndex"
			></vCategoryBar>
			<!-- <vSearchSongTable :songsList="data.searchResList"></vSearchSongTable> -->
			<!-- <vSearchArtistTable :artistList="data.searchResList"></vSearchArtistTable> -->
			<!-- new write with method -->
			<router-view :dataList="data.searchList"></router-view>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { search } from '@/service/search'
	import vCategoryBar from '@/components/category-bar.vue'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		searchList: [],
		isEmpty: false,
		// 默认为0, 即单曲
		categoryIndex: 0,
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
			// 由于后端传来的单曲数据多了一个字段，为了table的复用性，添加一个判断
			switch (type) {
				case 1:
					data.searchList = res.result.songs
					break
				case 100:
					data.searchList = res.result.artists
					break
				case 1000:
					data.searchList = res.result.playlists.map(dataList => ({
						...dataList,
						picUrl: dataList.coverImgUrl,
					}))
					break
				default:
					data.searchList = res.result
			}
			data.isEmpty = false
		} else {
			data.isEmpty = true
		}
	}

	// 拿到category子组件传来的index
	const handleIndex = index => {
		data.categoryIndex = index
	}

	watch([() => route.query.keywords, () => data.categoryIndex], async ([newVal]) => {
		// 跳转前判断，防抖
		// 若关键字为空，即当用户清空关键字欲重新输入或跳转其他页面时不再请求数据，防止莫名空页面(请求空字符串后拿来的数据为空，展示的数据自然也为空)
		if (newVal)
			switch (data.categoryIndex) {
				case 0:
					await init(newVal, 1)
					if (route.name != 'searchSingle') router.push({ name: 'searchSingle' })
					break
				case 1:
					await init(newVal, 100)
					if (route.name != 'searchArtist') router.push({ name: 'searchArtist' })
					break
				case 2:
					await init(newVal, 1000)
					if (route.name != 'searchPlaylist') router.push({ name: 'searchPlaylist' })
					break
				case 3:
					await init(newVal, 10)
					if (route.name != 'searchAlbum') router.push({ name: 'searchAlbum' })
					break
				case 4:
					await init(newVal, 1002)
					if (route.name != 'searchUser') router.push({ name: 'searchUser' })
					break
				default:
					router.push({ name: 'error' })
			}
	})
</script>

<style lang="less" scoped>
	@import url(@/base.less);
	.search {
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
