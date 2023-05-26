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
	import { useRouter, useRoute } from 'vue-router'
	import { collectedArtist, collectedVideo, collectedMV } from '@/service/collect'
	import vCategoryBar from '@/components/category-bar.vue'

	const router = useRouter()
	const route = useRoute()
	const data = reactive({
		dataList: [],
		categoryIndex: '',
	})

	onMounted(() => {
		// 默认艺人comp
		init(0)
	})
	const init = async type => {
		let res = []
		switch (type) {
			case 0:
				res = await collectedArtist()
				data.dataList = res.data
				if (route.name != 'artist') router.push({ name: 'artist' })
				break
			case 1:
				res = await collectedMV()
				data.dataList = res.data
				if (route.name != 'album') router.push({ name: 'album' })
				break
			case 2:
				res = await collectedVideo()
				data.dataList = res.data
				if (route.name != 'video') router.push({ name: 'video' })
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
