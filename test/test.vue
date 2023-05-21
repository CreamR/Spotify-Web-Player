<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">test foundation</h1>
		<button @click="getIN"></button>
	</div>
</template>

<script setup>
	import 'media-chrome'

	import { timeSwtich } from '@/function/timeSwtich'
	import { collectedArtist } from '@/service/collect'
	console.log(timeSwtich('524531354568'))

	const getIN = async () => {
		const res = await collectedArtist()
		console.log(res)
	}
</script>

<style lang="less" scoped>
	.audioPlayer {
		border-radius: 30% !important;
		width: 80vw;
	}
	.player {
		margin-top: 3vw;
		margin-left: 10vw;
	}
</style>
