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

			<vSearchResTable :songsList="data.searchResList"></vSearchResTable>
			<component :is=""></component>
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
		// 控制类别按钮点击后变色
		isActive: 1,
	})

	onMounted(() => {
		init(route.query.keywords)
	})
	// 默认搜索单曲
	const init = async key => {
		const res = await search(key, 1)

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

	const searchArtist = async key => {
		const res = await search(key, 100)

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
			switch (data.isActive) {
				case 1:
					init(newVal)
					break
				case 2:

				default:
					break
			}
			init(newVal)
		}
	)
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
