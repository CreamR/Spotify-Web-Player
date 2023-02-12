<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">
			test foundation and made by Gmz, for test data request
		</h1>
		<el-button
			style="text-align: center; margin: 3vw 50%; transform: translateX(-50%)"
			@click="inlogout"
			>test btn</el-button
		>
		<el-button @click="test">test getSearchSuggest</el-button>
		<h3 style="text-align: center; margin: 3vw 50%; transform: translateX(-50%)">skeleton</h3>
		<skeleton></skeleton>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { getSearchSuggest } from '../src/service/search'
	import skeleton from '../src/components/feedback/skeleton.vue'

	const inlogout = () => {
		fetch('http://127.0.0.1:3000/search/multimatch?keywords=海阔天')
			.then(data => data.json())
			.then(data => console.log(data))
	}
	const test = async () => {
		const res = await fetch('http://127.0.0.1:3000/artist/top/song?id=6452').then(data =>
			data.json()
		)
		console.log('ssssss')
		console.log(res)
	}
</script>

<style lang="less" scoped></style>
