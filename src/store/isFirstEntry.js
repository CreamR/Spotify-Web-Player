import { defineStore, acceptHMRUpdate } from 'pinia'
import { getSingleUrl, checkSingle } from '/src/service/single'

export const useIsFirstEntry = defineStore('isFirstEntry', {
	state: () => {
		return {
			mark: true,
		}
	},
	actions: {
		notFirstEntry() {
			this.mark = false
		},
	},
})
