import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCurSingleList = defineStore('curSingleList', {
	state: () => {
		return {
			curSingleList: [],
		}
	},
	actions: {
		setCurPlaylist(playlist) {
			this.curPlaylist = playlist
		},
	},
	getters: {},
})

// 由于当前歌曲列表需要支持随时改变URL，这里需要使状态管理支持热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCurSingleList, import.meta.hot))
}
