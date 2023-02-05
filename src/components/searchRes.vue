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
			<h1>There is content</h1>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { search } from '../service/search'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		songsList: [],
		artistList: [],
		isEmpty: false,
	})

	onMounted(() => {
		init(route.query.keywords)
	})
	const init = async key => {
		const res = await search(key)

		// 判断返回对象是否空
		if (Object.keys(res.result).length != 0) {
			data.songsList = res.result
			data.isEmpty = true
			console.log(res.result)
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
