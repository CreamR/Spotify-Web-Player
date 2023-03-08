<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">
			test foundation made by Gmz, for test data
		</h1>

		<el-button
			@click="t"
			style="margin: 100px auto; text-align: center; margin-left: 45vw"
			>testBtn</el-button
		>
		<!-- <h3 style="text-align: center; margin: 3vw 50%; transform: translateX(-50%)">skeleton</h3> -->
		<!-- <skeleton></skeleton> -->
		<!-- <vSearchArtistTable :artistList="obj.datalist"></vSearchArtistTable> -->
	</div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	import { isDeviceType } from '../src/function/isDeviceType'
	import { search } from '../src/service/search'
	import { login } from '../src/service/login'
	import { getGreatPlaylist } from '../src/service/playlist'
	import skeleton from '../src/components/feedback/skeleton.vue'

	import { test } from '/test/service'
	import { getUrl } from '../src/function/base64toBolb'

	import vSearchArtistTable from '../src/components/consist/searchArtistTable.vue'

	const obj = reactive({ datalist: [] })
	const tt = async () => {
		// const res = await search('海阔天空', 1)
		// const res2 = await search('海阔天空', 100)
		// obj.datalist = res2.result
		// const res3 = await search('海阔天空', 1000)
		// const res4 = await search('海阔天空', 10)
		// console.log('单曲搜索')
		// console.log(res)
		// console.log('歌手搜索')
		// console.log(res2.result)
		// console.log('歌单搜索')
		// console.log(res3)
		// console.log('专辑搜索')
		// console.log(res4)

		const res = await fetch(`http://127.0.0.1:3000/user/detail?uid=32953014`).then(data =>
			data.json()
		)
		console.log('res log')
		console.log(res)
		console.log('device')
		console.log(isDeviceType())
	}
	// const getNow = async () => {
	// 	const res = await fetch('http://127.0.0.1:3000/login/qr/key').then(data => data.json())
	// 	const res2 = await fetch(`http://127.0.0.1:3000/login/qr/create?key=${res.data.unikey}`)
	// 	console.log('res log')
	// 	console.log(res)
	// 	console.log(`res2 log`)
	// 	console.log(res2)
	// }
	// getNow()

	const t = () => {
		test()
	}

	console.log(
		getUrl(
			'data:image/png;base64,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'
		)
	)
</script>

<style lang="less" scoped></style>
