<template>
	<div class="testPage">
		<h1>test</h1>
		<el-row
			:gutter="20"
			justify="space-around"
		>
			<el-col :span="8"><div class="grid-content" /></el-col>
			<el-col :span="8"><div class="grid-content" /></el-col>
		</el-row>
	</div>
</template>

<script setup></script>

<style lang="less" scoped>
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
		background-color: pink;
	}
</style>
