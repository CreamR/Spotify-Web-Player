const baseURL: string = 'http://localhost:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取验证码
export const getCode = (phone: number) =>
	fetch(`${baseURL}/captcha/sent?phone=${phone}`).then(data => data.json())

// 验证码登录
export const login = (phone: number, verifyCode: number) =>
	fetch(`${baseURL}/captcha/verify?phone=${phone}&captcha=${verifyCode}`).then(data => data.json())

// 二维码登录

// 登出
export const logout = (): void => {
	fetch(`${baseURL}/logout?token=${token}&cookie=${cookie}`).then(data => data.json())
}

// 获取用户资料
export const getProfile = (uID: string) =>
	fetch(`${baseURL}/user/detail?uid=${uID}&token=${token}&cookie=${cookie}`).then(data =>
		data.json()
	)
