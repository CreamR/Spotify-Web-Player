const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取用户资料
export const getProfile = (uID: string) =>
	fetch(`${baseURL}/user/detail?uid=${uID}&token=${token}&cookie=${cookie}`).then(data =>
		data.json()
	)
