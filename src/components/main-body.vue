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
		<el-row
			class="greatPlaylist"
			justify="start"
			:gutter="50"
		>
			<el-col
				v-show="data.logined"
				:span="12"
				:md="8"
				:lg="4"
				class="playlistInfo"
			>
				<div class="wrap">
					<img
						src="../assets/dailyLike.svg"
						title="每日推荐"
					/>
					<p style="text-align: center">🥰 每日推荐歌曲 🥰</p>
				</div>
			</el-col>

			<el-col
				v-for="(item, index) in data.greatPlaylist"
				:key="index"
				:span="12"
				:md="8"
				:lg="4"
				class="playlistInfo"
				@click="
					$router.push({
						path: `/playlist/${item.id}`,
						query: {
							playlistIMG: item.picUrl,
							listTitle: item.name,
							count: item.trackCount,
							view: item.playcount,
							creator: item.creator.nickname,
						},
					})
				"
			>
				<div class="wrap">
					<img
						:src="item.picUrl"
						alt="image"
						:title="item.name"
					/>
					<p>{{ item.name }}</p>
				</div>
			</el-col>
		</el-row>

		<!-- <ul class="greatPlaylist">
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
				@click="
					$router.push({
						path: `/playlist/${item.id}`,
						query: {
							playlistIMG: item.picUrl,
							listTitle: item.name,
							count: item.trackCount,
							view: item.playcount,
							creator: item.creator.nickname,
						},
					})
				"
			>
				<img
					:src="item.picUrl"
					alt="image"
					:title="item.name"
				/>
				<p>{{ item.name }}</p>
			</li>
		</ul> -->
	</div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	import { getGreatPlaylist } from '../service/playlist'

	const data = reactive({
		greatPlaylist: [],
		logined: localStorage.getItem('cookie') ? true : false,
	})

	onMounted(() => {
		init()
	})
	const init = async () => {
		const token = localStorage.getItem('token') ?? null
		const cookie = localStorage.getItem('cookie') ?? null
		const resPlaylist = await getGreatPlaylist(token, cookie)

		data.greatPlaylist = resPlaylist.recommend
		console.log('greatList')
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
			margin-bottom: 30px;
			li {
				#setWH(15vw, 8vw);
				border-radius: 30px;

				position: relative;
				margin-right: 20px;

				cursor: pointer;
				transition: all 250ms ease;
				// responsive compatible function
				@media screen and (max-width: 992px) {
					#setWH(85px,160px);
					&:hover {
						width: 250px;
					}
				}
				i {
					font-size: larger;

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
			li:hover {
				color: black;
				background-color: @colorSuccess;
			}
		}
		.greatPlaylist {
			// #setFlex(flex-start);
			// flex-wrap: wrap;
			margin-bottom: 30px;
			.playlistInfo {
				border-radius: 10px;

				padding: 20px 0px;
				margin-bottom: 30px;

				cursor: pointer;
				#trs-bgc(rgb(40, 40, 40), rgb(30, 30, 30));
				img {
					// #setWH(10vw, 10vw);
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
		}
	}
</style>
