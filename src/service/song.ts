const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取每日推荐歌曲
export const getGreatSongs = () =>
	fetch(`${baseURL}/recommend/songs?&cookie=${cookie}`).then(data => data.json())

// 获取音乐url
export const getsongUrl = (songID: number) =>
	fetch(`${baseURL}/song/url/v1?id=${songID}&level=exhigh&token=${token}&cookie=${cookie}`).then(
		data => data.json()
	)

// 检查音乐是否可用，返回{ success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
export const checkMusic = (songID: number) =>
	fetch(`${baseURL}/check/music?id=${songID}&token=${token}&cookie=${cookie}`).then(data =>
		data.json()
	)
