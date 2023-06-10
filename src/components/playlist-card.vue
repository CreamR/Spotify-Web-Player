<template>
	<div class="playlistCard">
		<img :src="props.data.picUrl" />
		<p :class="{ textCenter: props.data.isTextCenter }">{{ props.data.title }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		data: {
			priUrl: '',
			title: '',
			isTextCenter: false,
		},
	})
</script>

<style lang="less" scoped>
	@import url(@/base.less);
	// 仅推荐歌单card的title才居中
	.textCenter {
		text-align: center;
	}
	.playlistCard {
		border-radius: 10px;

		padding: 30px;
		margin-bottom: 30px;

		cursor: pointer;
		#trs-bgc(rgb(40, 40, 40), rgb(30, 30, 30));
		img {
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}

		p {
			height: 40px;
			font-size: normal;

			margin-bottom: 10px;
			padding: 1px 10px;

			// 超出两行隐藏文字
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>
