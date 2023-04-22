const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取用户资料 - 未登录也可，可查询所有用户信息
export const getProfile = (uID: string) =>
	fetch(`${baseURL}/user/detail?uid=${uID}&cookie=${cookie}`).then(data => data.json())

// 获取账号信息 - 登录后传入cookie可获得当前账号信息
export const getUserInfo = (cookie: string) =>
	fetch(`${baseURL}/user/account?cookie=${cookie}`).then(data => data.json())
