<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">
			test foundation made by Gmz, for test data
		</h1>

		<el-button
			@click="test"
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
	import { login } from '../src/service/user'
	import { getGreatPlaylist } from '../src/service/playlist'
	import skeleton from '../src/components/feedback/skeleton.vue'

	import vSearchArtistTable from '../src/components/consist/searchArtistTable.vue'

	const obj = reactive({ datalist: [] })
	const test = async () => {
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
</script>

<style lang="less" scoped></style>
