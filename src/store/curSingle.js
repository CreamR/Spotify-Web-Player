import { defineStore, acceptHMRUpdate } from 'pinia'
import { getSingleUrl, checkSingle } from '/src/service/single'

export const useCurSingle = defineStore('curSingle', {
	state: () => {
		return {
			singleUrl: '',
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
				console.log(res)
				this.singleUrl = res
			}
		},
	},
	getters: {},
})

// 由于歌曲需要支持随时改变URL，这里需要使状态管理支持热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCurSingle, import.meta.hot))
}
