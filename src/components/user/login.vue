<template>
	<div class="login">
		<h1>spotify - 用户登录</h1>
		<circle></circle>
		<el-input
			v-model="verifyData.phone"
			placeholder="请输入手机号"
			size="large"
		/>
		<el-input
			v-model="verifyData.verifyCode"
			placeholder="请输入验证码"
			size="large"
		/>
		<el-button
			round
			text
			@click="useGetCode"
			:disabled="btnDisabled"
			>{{ btnText }}</el-button
		>
		<el-button
			type="success"
			round
			@click="useLogin"
			>点击此处登录</el-button
		>
	</div>
</template>

<script setup>
	import { reactive, ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { login, getCode } from '../../service/user'

	const router = useRouter()
	const verifyData = reactive({
		phone: '',
		verifyCode: null,
	})
	let btnText = ref('点击获取验证码')
	let btnDisabled = ref(false)

	const useGetCode = () => {
		const regrex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
		if (regrex.test(verifyData.phone)) {
			getCode(verifyData.phone)
			ElNotification({
				title: '成功',
				message: '验证码已成功发送！',
				type: 'success',
			})
			btnDisabled.value = true

			let time = 60
			const timer = setInterval(() => {
				if (time != 0) {
					time--
					btnText.value = `${time}秒后可重新发送`
					// TEST console.log(time)
				} else {
					btnDisabled.value = false
					btnText.value = `点击获取验证码`
					clearInterval(timer)
				}
			}, 1000)
		} else {
			ElNotification({
				title: '错误',
				message: '手机号格式不正确，请重新输入！',
				type: 'error',
			})
		}
	}
	const useLogin = async () => {
		const res = await login(verifyData.phone, verifyData.verifyCode)
		const temp = res.code == 200 ?? false
		ElNotification({
			title: temp ? '登录成功' : '登录失败',
			message: res.message,
			type: temp ? 'success' : 'error',
		})

		if (temp) {
			localStorage.setItem('token', res.token)
			localStorage.setItem('cookie', res.cookie)
			localStorage.setItem('userID', res.account.id)

			router.push({ name: 'main' })
		}
	}
</script>

<style lang="less" scoped>
	.login {
		text-align: center;
		padding: 100px;
		min-height: calc(100vh - 10vh - 65px);

		color: whitesmoke;
		background-image: linear-gradient(rgb(32, 32, 32), rgb(20, 20, 20));

		circle {
			display: block;
			width: 300px;
			margin: 50px auto;

			border-bottom: 1px solid whitesmoke;
		}
		.el-input {
			display: flex;
			width: 30vw;
			margin-bottom: 50px;
			text-align: center;
			margin-left: 50%;
			transform: translateX(-50%);
		}
		.el-button {
			display: block;
			width: 30vw;
			height: 45px;
			margin: 15px auto;
		}
	}
</style>
