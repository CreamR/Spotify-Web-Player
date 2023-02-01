const baseURL: string = 'http://127.0.0.1:3000'

// 获取用户歌单
export const getPlaylist = (uID: number) =>
	fetch(`${baseURL}/user/playlist?uid=${uID}`).then(data => data.json())

// 获取歌单内容
export const getPlaylistDetail = (listID: number) =>
	fetch(`${baseURL}/playlist/track/all?id=${listID}`).then(data => data.json())

// 获取每日推荐歌单
export const getGreatPlaylist = (token: string, cookie: string) =>
	fetch(`${baseURL}/recommend/resource?token=${token}&cookie=${cookie}`).then(data => data.json())

// 获取每日推荐歌曲
export const getGreatSongs = (token: string, cookie: string) =>
	fetch(`${baseURL}/recommend/songs?token=${token}&cookie=${cookie}`).then(data => data.json())

// 获取新歌速递歌单
export const getNewsongs = (type: number) =>
	fetch(`${baseURL}/top/song?type=${type}`).then(data => data.json())
