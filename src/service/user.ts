const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取验证码
export const getCode = (phone: number) =>
	fetch(`${baseURL}/captcha/sent?phone=${phone}`).then(data => data.json())

// 登录
export const login = (phone: number, verifyCode: number) =>
	fetch(`${baseURL}/login/cellphone?phone=${phone}&captcha=${verifyCode}`).then(data => data.json())

// 登出
export const logout = (): void => {
	fetch(`${baseURL}/logout?token=${token}&cookie=${cookie}`).then(data => data.json())
}

// 获取用户资料
export const getProfile = (uID: string) =>
	fetch(`${baseURL}/user/detail?uid=${uID}&token=${token}&cookie=${cookie}`).then(data =>
		data.json()
	)
