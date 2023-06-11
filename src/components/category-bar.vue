<template>
	<transition name="animate">
		<div
			class="categoryBar"
			v-if="show"
		>
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
	</transition>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	const props = defineProps({
		dataList: Array,
	})
	// 默认展示单曲
	const isActive = ref(0)

	const emit = defineEmits(['getIndex'])

	const clickBtn = index => {
		isActive.value = index
		//传给父组件index，用于通过用户点击的种类指数获取数据
		emit('getIndex', index)
	}

	const show = ref(false)
	onMounted(() => {
		show.value = true
	})
</script>

<style lang="less" scoped>
	@import url(@/animation/categoryBar.less);
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
