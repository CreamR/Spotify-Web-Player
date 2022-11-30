const baseURL: string = 'http://127.0.0.1:3000'

// 搜索建议
export const getSearchSuggest = async (keywords: number | string) =>
	await fetch(`${baseURL}/search/suggest?keywords=${keywords}`).then(data => data.json())

// 搜索
export const search = async (keywords: number | string, type: number) =>
	await fetch(`${baseURL}/search?keywords=${keywords}`).then(data => data.json())
