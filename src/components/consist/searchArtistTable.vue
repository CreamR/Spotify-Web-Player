<template>
	<div class="table">
		<el-row gutter="30">
			<el-col
				:span="8"
				:md="6"
				:lg="4"
				v-for="(item, index) in props.dataList.artists"
				:key="index"
			>
				<img :src="item.img1v1Url" />
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'

	const props = defineProps({
		dataList: [],
	})
	console.log('props data')
	console.log(props.datatList)
</script>

<style lang="less" scoped>
	.table {
		.el-row {
			.el-col {
				margin-top: 30px;

				img {
					width: 100%;
					height: 100%;
					cursor: pointer;
					border-radius: 50%;
				}
			}
		}
	}
</style>
