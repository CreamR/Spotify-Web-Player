<template>
	<router-view></router-view>
</template>

<script setup>
	const userType = navigator.userAgent
	if (userType.includes('MSIE'))
		alert('不支持IE, 此项目需要至少 Chrome 67 / Edge 79 / Safari 12 以上版本')
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;

		list-style: none;
		box-sizing: border-box;

		font-style: normal;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue';
	}
	a {
		text-decoration: none;
	}

	::-webkit-scrollbar {
		//滚动条整体部分
		width: 6px;
		background-color: rgb(30, 30, 30);
	}
	::-webkit-scrollbar-thumb {
		//滚动条可拖动部分
		border-radius: 6px;
		background-color: rgb(66, 66, 66);
	}
</style>
