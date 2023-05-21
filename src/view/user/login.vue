<template>
	<div class="login">
		<div class="logo">
			<img
				src="../../../logo.svg"
				title="Spotify"
				width="77"
				class="spotify"
			/>
			<el-icon><CloseBold /></el-icon>
			<img
				src="../../../cloud-music.svg"
				title="Could-Music"
				width="88"
				class="cloudmusic"
			/>
		</div>
		<article></article>
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
		<router-link
			to="/loginQRcode"
			class="tips"
			>验证码登录现在无法使用，请使用二维码登录</router-link
		>
	</div>
</template>

<script setup>
	import { reactive, ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { CloseBold } from '@element-plus/icons-vue'
	import { login, getCode } from '@/service/login'

	const router = useRouter()
	const verifyData = reactive({
		phone: '',
		verifyCode: null,
	})
	let btnText = ref('点击获取验证码')
	let btnDisabled = ref(false)

	const useGetCode = async () => {
		const regrex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')

		if (regrex.test(verifyData.phone)) {
			const res = await getCode(verifyData.phone, Date.now())
			console.log(res)
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
		const res = await login(verifyData.phone, verifyData.verifyCode, Date.now())
		console.log(res)
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
	@import url(@/base.less);
	.login {
		color: white;
		text-align: center;
		.logo {
			margin-top: 100px;
			.spotify {
				vertical-align: middle;
				margin-right: 22px;
			}
			.cloudmusic {
				vertical-align: middle;
				margin-left: 15px;
			}
		}
		article {
			display: block;
			width: 300px;
			border-bottom: 1px solid @colorInfo;

			margin: 45px auto;
		}
		.el-input {
			display: flex;
			width: 30vw;

			margin: 50px auto;
		}
		.el-button {
			display: block;
			#setWH(30vw, 45px);

			margin: 20px auto;
		}
		.tips {
			color: @colorDanger;
			font-size: small;
			cursor: pointer;
			#trs-color(@colorSuccess, @colorInfo);
		}
	}
</style>
