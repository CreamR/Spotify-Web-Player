<template>
	<div class="collect">
		<vCategoryBar
			:dataList="['艺人', '专辑', '视频']"
			@getIndex="handleIndex"
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
		// 默认艺人comp
		init(0)
	})
	const init = async type => {
		// const res = await collectedArtist()
		// console.log(res)

		switch (type) {
			case 0:
				data.dataList = await collectedArtist()
				router.push({ name: 'artist' })
				break
			case 1:
				data.dataList = await collectedMV()
				router.push({ name: 'album' })
				break
			case 2:
				data.dataList = await collectedVideo()
				router.push({ name: 'video' })
				break
			default:
				console.log('collect初始化传入的数据类型错误')
				break
		}
	}

	const handleIndex = index => {
		data.categoryIndex = index
	}

	watch(
		() => data.categoryIndex,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped></style>
