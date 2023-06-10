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
		>
			<el-col
				v-show="data.logined"
				:span="12"
				:md="8"
				:lg="6"
				:xl="4"
				@click="
					$router.push({
						name: 'recSong',
					})
				"
			>
				<vPlaylistCard
					:data="{
						picUrl: 'src/assets/dailyLike.svg',
						title: '🥰 每日推荐歌曲 🥰',
						isTextCenter: true,
					}"
				></vPlaylistCard>
			</el-col>

			<el-col
				v-for="(item, index) in data.greatPlaylist"
				:key="index"
				:span="12"
				:md="8"
				:lg="6"
				:xl="4"
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
				<vPlaylistCard
					:data="{ picUrl: item.picUrl, title: item.name, isTextCenter: false }"
				></vPlaylistCard>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
	import { onMounted, reactive } from 'vue'
	import { useRouter } from 'vue-router'
	import { useIsFirstEntry } from '@/store/isFirstEntry'
	import { getGreatPlaylist } from '@/service/playlist'
	import vPlaylistCard from '@/components/playlist-card.vue'

	const router = useRouter()
	const isFirstEntry = useIsFirstEntry()
	const data = reactive({
		greatPlaylist: [],
		logined: localStorage.getItem('cookie') ? true : false,
	})

	onMounted(() => {
		init()
		if (isFirstEntry.mark) {
			const timer = setTimeout(() => {
				ElNotification({
					title: 'cookie',
					message:
						' 此平台使用cookie通过分析用户习惯实现个性化功能, 此举不会侵犯个人隐私或发送任何相关敏感数据 ',
					position: 'bottom-right',
				})
				clearTimeout(timer)
			}, 1000)
			isFirstEntry.notFirstEntry()
		}
	})
	const init = async () => {
		const resPlaylist = await getGreatPlaylist()

		data.greatPlaylist = resPlaylist.recommend
		console.log('greatList')
		console.log(resPlaylist)
	}
	const goPlaylist = type => {
		router.push({ path: `/newsong-express/${type}` })
	}
</script>

<style lang="less" scoped>
	@import url(@/base.less);
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
			margin-bottom: 30px;
		}
	}
</style>
