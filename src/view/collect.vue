<template>
	<div class="collect">
		<vCategoryBar
			:dataList="['艺人', '专辑', '视频']"
			:getIndex="handleIndex"
		></vCategoryBar>
		<router-view :dataList="data.dataList"></router-view>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'
	import { useRouter } from 'vue-router'
	import { collectedArtist, collectedVideo, collectedMV } from '@/service/collect'
	import vCategoryBar from '@/components/category-bar.vue'

	const router = useRouter()
	const data = reactive({
		dataList: [],
		categoryIndex: '',
	})

	onMounted(() => {
		init()
	})
	const init = async () => {
		const res = await collectedArtist()

		console.log(res)
	}

	const handleIndex = index => {
		data.categoryIndex = index
	}

	watch(
		() => data.categoryIndex,
		newVal => {
			switch (newVal) {
			}
		}
	)
</script>

<style lang="less" scoped></style>
