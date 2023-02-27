<template>
	<router-view></router-view>
</template>

<script setup>
	const userType = navigator.userAgent
	if (userType.includes('MSIE'))
		alert(
			'不支持IE, 此项目需要至少 Chrome 67 / Edge 79 / FireFox 78 / Safari 12 以上版本可以保证大部分组件的运行, 但想要获取全部功能的最佳体验需要Chrome80+'
		)
</script>

<style lang="less">
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
		width: 5px;
		background-color: rgb(30, 30, 30);
		z-index: 999;
	}
	::-webkit-scrollbar-thumb {
		//滚动条可拖动部分
		border-radius: 5px;
		background-color: rgb(100, 100, 100);
		z-index: 999;
	}
</style>
