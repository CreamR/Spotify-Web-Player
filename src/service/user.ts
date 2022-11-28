const baseURL: string = 'http://127.0.0.1:3000'

// 获取验证码
export const getCode = async (phone: number) =>
	await fetch(`${baseURL}/captcha/sent?phone=${phone}`).then(data => data.json())

// 登录
export const login = async (phone: number, verifyCode: number) =>
	await fetch(`${baseURL}/login/cellphone?phone=${phone}&captcha=${verifyCode}`).then(data =>
		data.json()
	)

// 登出
export const logout = (): void => {
	fetch(`${baseURL}/logout`)
		.then(data => data.json())
		.then(data => console.log(data))
}

// 获取用户资料
export const getProfile = async (uID: string) =>
	await fetch(`${baseURL}/user/detail?uid=${uID}`).then(data => data.json())
