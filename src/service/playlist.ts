const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取用户歌单
export const getPlaylist = (uID: number) =>
	fetch(`${baseURL}/user/playlist?uid=${uID}&cookie=${cookie}`).then(data => data.json())

// 获取歌单内容
export const getPlaylistDetail = (listID: number) =>
	fetch(`${baseURL}/playlist/track/all?id=${listID}&cookie=${cookie}`).then(data => data.json())

// 获取每日推荐歌单
export const getGreatPlaylist = () =>
	fetch(`${baseURL}/recommend/resource?cookie=${cookie}`).then(data => data.json())

// 获取新歌速递歌单
export const getNewSongs = (type: number) =>
	fetch(`${baseURL}/top/song?type=${type}&cookie=${cookie}`).then(data => data.json())
