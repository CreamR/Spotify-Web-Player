<template>
	<el-result
		icon="error"
		title="发生错误"
		sub-title="发生了一些错误，刷新页面可能会恢复"
		style="text-align: center; margin-top: 200px"
	>
		<template #extra>
			<el-button
				type="success"
				@click="$router.push({ name: 'main' })"
				>返回主页</el-button
			>
		</template>
	</el-result>
</template>
