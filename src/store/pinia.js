import { defineStore, acceptHMRUpdate } from 'pinia'
import { getsongUrl } from '../service/song'

export const useSong = defineStore('song', {
	state: () => {
		return {
			songUrl: '',
		}
	},
	actions: {
		async getSongUrl(songID) {
			const res = await getsongUrl(songID)
			console.log(res)
			this.songUrl = res
		},
	},
	getters: {},
})
export const useSongList = defineStore('songList', {
	state: () => {
		return {
			curPlaylist: [],
		}
	},
	actions: {
		setCurPlaylist(playlist) {
			this.curPlaylist = playlist
		},
	},
	getters: {},
})
