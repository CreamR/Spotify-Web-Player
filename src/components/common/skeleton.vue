<template>
	<div class="skeleton">
		<el-skeleton
			style="width: calc(100vw - 245px)"
			:count="12"
			animated
			:throttle="100"
		>
			<template #template>
				<div class="entire">
					<el-skeleton-item
						variant="image"
						style="width: 10vw; height: 10vw; border-radius: 10px"
					/>
					<div style="padding: 14px">
						<el-skeleton-item
							variant="p"
							style="width: 5vw"
						/>
						<div style="display: flex; align-items: center; justify-items: space-between">
							<el-skeleton-item
								variant="text"
								style="width: 8vw"
							/>
						</div>
					</div>
				</div>
			</template>
		</el-skeleton>
	</div>
</template>

<script setup></script>

<style lang="less" scoped>
	.el-skeleton {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;

		.entire {
			padding: 1.1vw;
			margin-left: 15px;
			margin-right: 15px;
		}
	}
</style>
