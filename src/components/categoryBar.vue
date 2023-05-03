<template>
	<div class="categoryBar">
		<el-button
			round
			:class="{ active: isActive == index }"
			color="rgb(55,55,55)"
			v-for="(item, index) in props.dataList"
			:key="index"
			@click="clickBtn(index)"
			>{{ item }}</el-button
		>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	const props = defineProps({
		dataList: Array,
	})
	// 默认展示单曲
	const isActive = ref(0)

	const emit = defineEmits(['getIndex'])

	const clickBtn = index => {
		isActive.value = index
		emit('getIndex', index)
	}
</script>

<style lang="less" scoped>
	.active {
		color: black;
		background-color: white;
	}
	.categoryBar {
		position: sticky;
		margin-bottom: 10px;
		.el-button {
			border: none;
			transition: all 200ms ease;
			margin-right: 10px;
		}
	}
</style>
