<template>
	<div class="table dark">
		<el-table
			:data="tableData"
			style="width: 100%"
			max-height="250"
		>
			<el-table-column
				fixed
				prop="date"
				label="Date"
				width="150"
			/>
			<el-table-column
				prop="name"
				label="Name"
				width="120"
			/>
			<el-table-column
				prop="state"
				label="State"
				width="120"
			/>
			<el-table-column
				prop="city"
				label="City"
				width="120"
			/>
			<el-table-column
				prop="address"
				label="Address"
				width="600"
			/>
			<el-table-column
				prop="zip"
				label="Zip"
				width="120"
			/>
			<el-table-column
				fixed="right"
				label="Operations"
				width="120"
			>
				<template #default="scope">
					<el-button
						link
						type="primary"
						size="small"
						@click.prevent="deleteRow(scope.$index)"
					>
						Remove
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup></script>

<style lang="less" scoped></style>
