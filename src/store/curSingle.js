import { defineStore, acceptHMRUpdate } from 'pinia'
import { getSingleUrl, checkSingle } from '/src/service/single'

export const useCurSingle = defineStore('curSingle', {
	state: () => {
		return {
			singleUrl: '',
			singleDetail: {
				imgUrl: '',
				title: '',
				artist: '',
			},
		}
	},
	actions: {
		async checkSingle(songID) {
			const res = await checkSingle(songID)
			console.log(res)
			if (res.code == 200) {
				return true
			}
		},
		async getSingleUrl(songID) {
			if (this.checkSingle(songID)) {
				const res = await getSingleUrl(songID)
				this.singleUrl = res.data[0].url
			} else {
				ElNotification({
					title: '错误',
					message: '歌曲路径错误，换首歌试试',
					position: 'top-right',
				})
			}
		},
		setSingleDetail(obj) {
			this.singleDetail.imgUrl = obj.imgUrl
			this.singleDetail.title = obj.title
			this.singleDetail.artist = obj.artist
		},
	},
	getters: {},
})

// 由于歌曲需要支持随时改变URL，这里需要使状态管理支持热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCurSingle, import.meta.hot))
}
