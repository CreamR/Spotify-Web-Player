const baseURL: string = 'http://127.0.0.1:3000'

const token = localStorage.getItem('token') ?? null
const cookie = localStorage.getItem('cookie') ?? null

// 获取验证码
export const getCode = (phone: number | string, timeStamp: string | number) =>
	fetch(`${baseURL}/captcha/sent`, {
		method: 'post',
		body: JSON.stringify({
			phone: phone,
			timestamp: timeStamp,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(data => data.json())

// 验证码登录
export const login = (
	phone: number | string,
	verifyCode: number | string,
	timeStamp: string | number
) =>
	fetch(`${baseURL}/captcha/verify`, {
		method: 'post',
		body: JSON.stringify({
			phone: phone,
			captcha: verifyCode,
			timestamp: timeStamp,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(data => data.json())

// 二维码登录 - 获取生成key
export const getKey = (timeStamp: string | number) =>
	fetch(`${baseURL}/login/qr/key`, {
		method: 'post',
		body: JSON.stringify({
			timestamp: timeStamp,
			noCookie: true,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(data => data.json())

// 二维码登录 - 二维码生成
export const getQRcode = (key: string | number, timeStamp: string | number) =>
	fetch(`${baseURL}/login/qr/create`, {
		method: 'post',
		body: JSON.stringify({
			key: key,
			qrimg: true,
			timestamp: timeStamp,
			noCookie: true,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(data => data.json())

//二维码登录 - 检测轮询
export const check = (key: string | number, timeStamp: string | number) =>
	fetch(`${baseURL}/login/qr/check`, {
		method: 'post',
		body: JSON.stringify({
			key: key,
			timestamp: timeStamp,
			noCookie: true,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(data => data.json())

// 登出
export const logout = () =>
	fetch(`${baseURL}/logout`, {
		method: 'post',
		body: JSON.stringify({
			cookie: cookie,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(data => data.json())
