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
				v-for="(item, index) in data.playlist"
				:key="index"
				class="songContent"
			>
				<div class="songIntro">
					<span class="indexNum">{{ index + 1 >= 10 ? index + 1 : '0' + (index + 1) }}</span>
					<img
						:src="item.al.picUrl"
						:title="item.name"
						width="50"
					/>
					<div class="songDetails">
						<h4>{{ item.name }}</h4>
						<span
							v-for="artist in item.ar"
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
					{{ item.al.name }}
				</div>

				<div class="time&operate">
					<!-- time resolver -->
					<!-- 将ms转换为min并转换为标准时间格式 -->
					{{
						Math.floor((item.dt / (1000 * 60)) % 60) >= 10
							? Math.floor((item.dt / (1000 * 60)) % 60)
							: '0' + Math.floor((item.dt / (1000 * 60)) % 60)
					}}
					:
					{{
						Math.floor(
							(((item.dt / (1000 * 60)) % 60) - Math.floor((item.dt / (1000 * 60)) % 60)).toFixed(
								2
							) * 60
						) >= 10
							? Math.floor(
									(
										((item.dt / (1000 * 60)) % 60) -
										Math.floor((item.dt / (1000 * 60)) % 60)
									).toFixed(2) * 60
							  )
							: '0' +
							  Math.floor(
									(
										((item.dt / (1000 * 60)) % 60) -
										Math.floor((item.dt / (1000 * 60)) % 60)
									).toFixed(2) * 60
							  )
					}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { onMounted, reactive, watch, ref } from 'vue'
	import { Clock } from '@element-plus/icons-vue'
	import { getPlaylistDetail } from '../service/playlist'

	const props = defineProps({
		listID: Number,
	})
	const data = reactive({ playlist: [] })

	onMounted(() => {
		init(data.listID)
	})
	const init = async id => {
		if (id) {
			const res = await getPlaylistDetail(id)
			data.playlist = res.songs
			console.log(res)
		}
	}
	watch(
		() => props.listID,
		newVal => {
			init(newVal)
		}
	)
</script>

<style lang="less" scoped>
	@import url(../base.less);
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
					left: 36vw;
				}
			}
			.songContent {
				.songIntro {
					display: inline-flex;
					align-items: center;

					vertical-align: middle;
					.indexNum {
						margin-right: 24px;

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
					left: 36vw;

					cursor: pointer;
					#trs-color(@colorSuccess, @colorInfo);
					#wordSeal(230px);
				}

				.time&operate {
					display: inline-block;
				}
				#trs-bgc(rgb(44, 44, 44), rgb(55, 55, 55));
			}
		}
	}
</style>
