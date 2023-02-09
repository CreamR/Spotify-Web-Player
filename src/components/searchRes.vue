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
					color="rgb(44,44,44)"
					>歌曲</el-button
				>
				<el-button
					round
					color="rgb(44,44,44)"
					>艺人</el-button
				><el-button
					round
					color="rgb(44,44,44)"
					>歌单</el-button
				>
				<el-button
					round
					color="rgb(44,44,44)"
					>专辑</el-button
				>
				<el-button
					round
					color="rgb(44,44,44)"
					>用户</el-button
				>
			</div>

			<vSearchResTable :songsList="data.searchResList"></vSearchResTable>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { search } from '../service/search'
	import vSearchResTable from './consist/searchResTable.vue'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		searchResList: [],
		isEmpty: false,
	})

	onMounted(() => {
		init(route.query.keywords)
	})
	// 默认搜索建议包含歌曲，歌手，歌单等
	const init = async key => {
		const res = await search(key)

		// 判断返回对象是否空
		if (Object.keys(res.result).length != 0) {
			data.searchResList = res.result.songs
			data.isEmpty = false

			console.log('fuckfuck')
			console.log(res.result.songs)
		} else {
			data.isEmpty = true
		}
	}

	watch(
		() => route.query.keywords,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped>
	.searchRes {
		.empty {
			text-align: center;
			margin-top: 18vw;
		}
	}
</style>
