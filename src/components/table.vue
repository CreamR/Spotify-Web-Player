<template>
	<div class="table">
		<ul>
			<li class="tag">
				<span>#</span>
				<span>标题</span>
				<span>专辑</span>
				<span>操作</span>
				<el-icon><Clock /></el-icon>
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
						<span v-for="artist in item.ar">{{ artist.name }}</span>
					</div>
				</div>

				<div class="album">
					{{ item.al.name }}
				</div>

				<div class="operate">
					<p>nothing</p>
				</div>

				<div class="time">
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
	import { onMounted, reactive, watch } from 'vue'
	import { Clock } from '@element-plus/icons-vue'
	import { getPlaylistDetail } from '../service/playlist'

	const props = defineProps({
		listID: Number,
	})
	const data = reactive({ playlist: [] })

	onMounted(() => {
		init(props.listID)
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
			}
			.tag {
			}
			.songContent {
				#setFlex(space-between);
				.songIntro {
					display: inline-flex;
					align-items: center;

					vertical-align: middle;
					.indexNum {
						color: @colorInfo;
						margin-right: 24px;

						text-align: center;
					}
					.songDetails {
						margin-left: 22px;
					}
				}
				.album {
					display: inline-block;
				}
				.operate {
					display: inline-block;
				}
				.time {
					display: inline-block;
				}
			}
		}
	}
</style>
