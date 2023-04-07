<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">test foundation</h1>
	</div>
</template>

<script setup>
	import 'media-chrome'
	import { timeSwtich } from '/src/function/timeSwtich'

	console.log(timeSwtich('524531354568'))
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
