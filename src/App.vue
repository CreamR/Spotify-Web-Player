<template>
	<router-view :key="logined"></router-view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'

	const logined = ref(0)
	onMounted(() => {
		const timer = setInterval(() => {
			if (localStorage.getItem('token')) {
				logined.value++
				clearInterval(timer)
			}
		}, 1111)
	})
</script>

<style lang="less">
	// base CSS configration
	* {
		margin: 0;
		padding: 0;

		list-style: none;

		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;

		font-style: normal;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	a {
		text-decoration: none;
	}

	::-webkit-scrollbar {
		//滚动条整体部分
		width: 3px;
		background-color: rgb(30, 30, 30);
		z-index: 999;
	}
	::-webkit-scrollbar-thumb {
		//滚动条可拖动部分
		border-radius: 3px;
		background-color: rgb(100, 100, 100);
		z-index: 999;
	}
</style>
