<template>
	<div class="body">
		<h1>新歌速递</h1>
		<ul class="newSongsCategory">
			<li @click="goPlaylist(0)">
				<i>全部</i>
			</li>

			<li @click="goPlaylist(8)">
				<i>日本</i>
			</li>

			<li @click="goPlaylist(7)">
				<i>华语</i>
			</li>

			<li @click="goPlaylist(96)">
				<i>欧美</i>
			</li>

			<li @click="goPlaylist(16)">
				<i>韩国</i>
			</li>
		</ul>

		<h1>为你推荐</h1>
		<ul class="greatPlaylist">
			<li v-show="data.logined">
				<img
					src="../assets/dailyLike.svg"
					title="每日推荐"
				/>
				<p style="text-align: center">🥰 每日推荐歌曲 🥰</p>
			</li>
			<li
				v-for="(item, index) in data.greatPlaylist"
				:key="index"
			>
				<img
					:src="item.picUrl"
					alt="image"
					:title="item.name"
				/>
				<p>{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	import { getGreatPlaylist } from '../service/playlist'

	const data = reactive({
		greatPlaylist: [],
		logined: localStorage.getItem('token') ? true : false,
	})

	onMounted(() => {
		init()
	})
	const init = async () => {
		const token = localStorage.getItem('token') ?? ''
		const cookie = localStorage.getItem('cookie') ?? ''
		const resPlaylist = await getGreatPlaylist(token, cookie)

		data.greatPlaylist = resPlaylist.recommend
		console.log(resPlaylist)
	}
	const goPlaylist = type => {}
</script>

<style lang="less" scoped>
	@import url(../base.less);
	h1 {
		font-weight: normal;
		margin-bottom: 20px;
	}
	.body {
		.newSongsCategory {
			#setFlex(space-around);
			margin-bottom: 20px;
			li {
				#setWH(15vw, 8vw);
				border-radius: 30px;

				position: relative;
				margin-right: 20px;

				cursor: pointer;
				transition: all 150ms ease;
				&:hover {
					transform: rotate(-3deg);
				}
				i {
					font-size: xx-large;

					position: absolute;
					bottom: 1.5vw;
					right: 2vw;
				}
			}
			li:nth-child(1) {
				background: rgba(186, 93, 7, 1);
			}
			li:nth-child(2) {
				background: rgba(39, 133, 106, 1);
			}
			li:nth-child(3) {
				background: rgba(30, 50, 100, 1);
			}
			li:nth-child(4) {
				background: rgba(232, 17, 91, 1);
			}
			li:nth-child(5) {
				background: rgba(141, 103, 171, 1);
				margin-right: 0;
			}
		}
		.greatPlaylist {
			#setFlex(flex-start);
			flex-wrap: wrap;
			li {
				border-radius: 10px;

				padding: 1.1vw;
				margin: 1.1vw 15px;

				cursor: pointer;
				#trs-bgc(rgb(40, 40, 40), rgb(30, 30, 30));
				img {
					#setWH(10vw, 10vw);
					border-radius: 10px;
				}
				p {
					display: -webkit-box;
					#setWH(10vw, 40px);
					font-size: normal;

					margin-bottom: 10px;
					padding: 1px 10px;

					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
</style>
