<template>
	<div class="searchRes">
		<h1>TESTING</h1>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { search } from '../service/search'

	const router = useRouter()
	const route = useRoute()

	const data = reactive({
		list: [],
	})

	onMounted(() => {
		init(route.query.keywords)
	})
	const init = async key => {
		const res = await search(key)
		// data.list = res
		console.log(res)
	}

	watch(
		() => route.query.keywords,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped></style>
