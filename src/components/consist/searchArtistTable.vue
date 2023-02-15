<template>
	<div class="table">
		<el-row>
			<el-col :span="6"> </el-col>
		</el-row>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch } from 'vue'

	const props = defineProps({
		artistList: [],
	})
	console.log(props.artistList)
</script>

<style lang="less" scoped>
	// li {
	// 	border-radius: 10px;

	// 	padding: 1vw;
	// 	margin: 1vw 15px;

	// 	cursor: pointer;
	// 	#trs-bgc(rgb(40, 40, 40), rgb(30, 30, 30));
	// 	img {
	// 		#setWH(10vw, 10vw);
	// 		border-radius: 10px;
	// 	}
	// 	p {
	// 		#setWH(10vw, 40px);
	// 		font-size: normal;

	// 		margin-bottom: 10px;
	// 		padding: 1px 10px;

	// 		// 超出两行隐藏文字
	// 		display: -webkit-box;
	// 		overflow: hidden;
	// 		text-overflow: ellipsis;
	// 		-webkit-line-clamp: 2;
	// 		-webkit-box-orient: vertical;
	// 	}
	// }
</style>
