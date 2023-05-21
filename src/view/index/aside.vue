<template>
	<div class="aside">
		<img
			src="@/assets/logo.svg"
			alt="logo"
			title="spotify"
			class="logo"
			@click="$router.push({ name: 'main' })"
		/>
		<ul class="fixContent">
			<li @click="$router.push({ name: 'main' })">
				<el-icon size="28"><Cpu /></el-icon>首页
			</li>
			<li @click="$router.push({ name: 'collect' })">
				<el-icon size="28"><Star /></el-icon>我的收藏
			</li>
		</ul>
		<circle></circle>
		<ul class="content">
			<h5 class="title">你的歌单</h5>
			<li
				v-for="(item, index) in data.playlist"
				:key="index"
				v-if="data.logined"
				@click="
					$router.push({
						path: `/playlist/${item.id}`,
						query: {
							playlistIMG: item.coverImgUrl,
							listTitle: item.name,
							count: item.trackCount,
							view: item.playCount,
							creator: item.creator.nickname,
						},
					})
				"
			>
				{{ item.name }}
			</li>
			<div
				class="unlogined"
				v-else
			>
				<h3>未登录</h3>
				<circle></circle>
				<el-button
					type="success"
					round
					size="large"
					@click="$router.push({ name: 'login' })"
					>点此登录</el-button
				>
			</div>
		</ul>
	</div>
</template>

<script setup>
	import { Cpu, Star } from '@element-plus/icons-vue'
	import { reactive, onMounted, watch } from 'vue'
	import { getPlaylist } from '@/service/playlist'

	const data = reactive({
		uID: localStorage.getItem('userID') ?? null,
		playlist: [],
		logined: localStorage.getItem('cookie') ? true : false,
	})

	onMounted(() => {
		init(data.uID)
	})
	const init = async uID => {
		if (data.logined) {
			const res = await getPlaylist(uID)
			data.playlist = res.playlist
			console.log(JSON.parse(JSON.stringify(data.playlist)))
		}
	}

	watch(
		() => data.logined,
		() => {
			init(data.uID)
		}
	)
	watch(localStorage.getItem('cookie'), newVal => {
		data.logined = newVal
	})
</script>

<style lang="less" scoped>
	@import url(@/base.less);
	.aside {
		color: white;
		font-weight: bold;
		background-color: black;
		.logo {
			margin: 30px 65px 20px 30px;
			cursor: pointer;
		}
		.fixContent,
		.content {
			padding: 3px;
			li {
				border-radius: 10px;

				padding: 10px;
				padding-left: 30px;
				margin-bottom: 10px;

				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;

				cursor: pointer;
				#trs-bgc(#2c2c2c, #3c3c3c);
				.el-icon {
					vertical-align: middle;
					margin-right: 10px;
				}
			}
		}
		circle {
			display: block;
			width: 80%;
			border-bottom: 1px solid #444444;

			margin: 0 auto;
		}
		.content {
			margin-top: 10px;
			.title {
				color: #666666;

				padding: 10px;
				padding-left: 30px;
			}
			.unlogined {
				text-align: center;
				margin-top: 30%;
				circle {
					width: 150px;
					border-bottom: 1px solid darkgrey;

					padding-bottom: 15px;
					margin-bottom: 15px;
				}
			}
		}
	}
</style>
