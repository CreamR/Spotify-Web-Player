const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 搜索建议
export const getSearchSuggest = (keywords: number | string) =>
	fetch(`${baseURL}/search/suggest?keywords=${keywords}&cookie=${cookie}`).then(data => data.json())

// 搜索
export const search = (keywords: number | string, type: number) =>
	fetch(`${baseURL}/search?keywords=${keywords}&type=${type}&cookie=${cookie}`).then(data =>
		data.json()
	)
