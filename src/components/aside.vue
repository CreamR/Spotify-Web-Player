<template>
	<div class="aside">
		<img
			src="../assets/logo.svg"
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
			<h3 class="title">你的歌单</h3>
			<li
				v-for="(item, index) in data.playlist"
				:key="index"
				v-if="data.logined"
				@click="
					$router.push({
						name: 'playlist',
						params: { id: item.id },
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
	import { reactive, onMounted } from 'vue'
	import { getPlaylist } from '../service/playlist'

	const data = reactive({
		uID: localStorage.getItem('userID') ?? null,
		playlist: [],
		logined: localStorage.getItem('token') ? true : false,
	})

	onMounted(() => {
		init()
	})
	const init = async () => {
		if (localStorage.getItem('token')) {
			const res = await getPlaylist(data.uID)
			data.playlist = res.playlist
			console.log(JSON.parse(JSON.stringify(data.playlist)))
		}
	}
</script>

<style lang="less" scoped>
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
				padding: 10px;
				padding-left: 30px;
				margin-bottom: 10px;

				border-radius: 10px;
				transition: all 0.2s ease;
				cursor: pointer;

				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				&:hover {
					background-color: #2c2c2c;
				}
				&:active {
					background-color: #3c3c3c;
				}
				.el-icon {
					vertical-align: middle;
					margin-right: 10px;
				}
			}
		}
		circle {
			display: block;
			width: 80%;
			margin: 0 auto;
			border-bottom: 1px solid #383838;
		}
		.content {
			margin-top: 10px;
			.title {
				padding: 10px;
				padding-left: 30px;

				color: #666666;
				font-weight: normal;
				font-size: medium;
			}
			.unlogined {
				text-align: center;
				margin-top: 30%;
				circle {
					width: 150px;
					padding-bottom: 15px;
					margin-bottom: 15px;
					border-bottom: 1px solid darkgrey;
				}
			}
		}
	}
</style>
