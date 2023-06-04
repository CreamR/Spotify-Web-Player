<template>
	<div class="table">
		<ul>
			<li class="tag">
				<span>#</span>
				<span class="name">标题</span>
				<span class="album">专辑</span>
				<el-icon
					color="darkgrey"
					size="22"
					><Clock
				/></el-icon>
			</li>
			<li
				v-for="(item, index) in props.dataList"
				:key="index"
				class="songContent"
			>
				<div class="songIntro">
					<span class="indexNum">{{ index + 1 >= 10 ? index + 1 : '0' + (index + 1) }}</span>
					<!-- 由于search单曲接口传来的数据缺少图片，所以搜索单曲时不会展示图片 -->
					<img
						:src="item.album.picUrl"
						v-if="typeof item.album.picUrl != 'undefined'"
						width="50"
					/>
					<div class="songDetails">
						<h4>{{ item.name }}</h4>
						<span
							v-for="artist in item.artists"
							@click.prevent=""
							>{{ artist.name }} &ThinSpace;&ThinSpace;</span
						>
					</div>
				</div>

				<!-- prevent防止DOM冒泡 -->
				<div
					class="album"
					@click.prevent=""
				>
					{{ item.album.name }}
				</div>

				<div class="operate">
					<img
						src="@/assets/play.svg"
						width="28"
						height="28"
						@click="
							playMusic(item.id, {
								imgUrl: item.album.picUrl,
								title: item.name,
								artist: item.artists[0].name,
							})
						"
					/>
				</div>

				<div class="time">
					{{ timeSwitch(item.duration) }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch, ref } from 'vue'
	import { useCurSingle } from '@/store/curSingle'
	import { Clock } from '@element-plus/icons-vue'
	import { timeSwitch } from '@/function/timeSwitch'

	const props = defineProps({
		dataList: [],
	})

	const curSingle = useCurSingle()
	const playMusic = (songID, singleDetail) => {
		curSingle.getSingleUrl(songID)
		curSingle.setSingleDetail(singleDetail)
		console.log(singleDetail.artist)
	}
</script>

<style lang="less" scoped>
	@import url(@/base.less);
	.table {
		padding: 10px 20px;
		ul {
			li {
				color: #b1b3b8;
				padding: 12px;
				font-size: small;

				// tag和songsDetail都添加flex布局与定位
				#setFlex(space-between);
				position: relative;
			}
			.tag {
				color: @colorInfo;
				.name {
					position: absolute;
					left: 50px;
				}
				.album {
					display: inline-block;
					position: absolute;
					left: 35vw;
				}
			}
			.songContent {
				&:hover {
					background-color: rgb(44, 44, 44);
				}
				.songIntro {
					display: inline-flex;
					align-items: center;

					vertical-align: middle;
					.indexNum {
						margin-right: 22px;

						text-align: center;
					}
					.songDetails {
						color: white;
						margin-left: 22px;

						#wordSeal(250px);
						h4 {
							font-size: 15px;
						}
						span {
							color: @colorInfo;
							font-size: small;

							cursor: pointer;
							#trs-color(@colorSuccess, @colorInfo);
						}
					}
				}
				.album {
					display: inline-block;
					position: absolute;
					left: 35vw;

					cursor: pointer;
					#trs-color(@colorSuccess, @colorInfo);
					#wordSeal(230px);
				}
				.operate {
					margin-left: 22vw;
				}
			}
		}
	}
</style>
