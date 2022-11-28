const baseURL: string = 'http://127.0.0.1:3000'

// 获取用户歌单
export const getPlaylist = async (uID: number) =>
	await fetch(`${baseURL}/user/playlist?uid=${uID}`).then(data => data.json())

// 获取歌单内容
export const getPlaylistDetail = async (listID: number) =>
	await fetch(`${baseURL}/playlist/track/all?id=${listID}`).then(data => data.json())

// 获取每日推荐歌单
export const getGreatPlaylist = async (token: string, cookie: string) =>
	await fetch(`${baseURL}/recommend/resource?token=${token}&cookie=${cookie}`).then(data =>
		data.json()
	)

// 获取每日推荐歌曲
export const getGreatSongs = async (token: string, cookie: string) =>
	await fetch(`${baseURL}/recommend/songs?token=${token}&cookie=${cookie}`).then(data =>
		data.json()
	)

// 获取新歌速递歌单
export const getNewsongs = async (type: number) =>
	await fetch(`${baseURL}/top/song?type=${type}`).then(data => data.json())
