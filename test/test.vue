<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">
			test foundation and made by Gmz, for test data request
		</h1>
		<el-button
			style="text-align: center; margin: 3vw 50%; transform: translateX(-50%)"
			@click="inlogout"
			>log out</el-button
		>
		<skeleton></skeleton>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { logout } from '../src/service/user'
	import skeleton from '../src/components/feedback/skeleton.vue'

	// const inlogout = () => {
	// 	fetch(
	// 		'http://127.0.0.1:3000/recommend/resource?token=d8777f0f6d6074b350b2ea2ce7be7b2825364b3714341368ba26417f491335e32db2b90205957188b18bbd0db694c16fe35c01e97b3efeae5a31b6a4ac1e65693ca202ee733a4762a89fe7c55eac81f3&cookie=__remember_me=true; Max-Age=1296000; Expires=Thu, 08 Dec 2022 16:18:16 GMT; Path=/;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/api/feedback;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/api/clientlog;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/api/clientlog;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/eapi/feedback;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/weapi/feedback;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/eapi/clientlog;;MUSIC_SNS=; Max-Age=0; Expires=Wed, 23 Nov 2022 16:18:16 GMT; Path=/;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/neapi/feedback;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/api/feedback;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/wapi/feedback;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/eapi/clientlog;;__csrf=3a1f2291e0477bdbff45812359d72557; Max-Age=1296010; Expires=Thu, 08 Dec 2022 16:18:26 GMT; Path=/;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/weapi/feedback;;MUSIC_U=d8777f0f6d6074b350b2ea2ce7be7b2825364b3714341368ba26417f491335e32db2b90205957188b18bbd0db694c16fe35c01e97b3efeae5a31b6a4ac1e65693ca202ee733a4762a89fe7c55eac81f3; Max-Age=1296000; Expires=Thu, 08 Dec 2022 16:18:16 GMT; Path=/;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/wapi/feedback;;MUSIC_A_T=1462357902267; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/neapi/feedback;;MUSIC_R_T=1462357917950; Max-Age=2147483647; Expires=Mon, 11 Dec 2090 19:32:23 GMT; Path=/eapi/feedback;'
	// 	)
	// 		.then(data => data.json())
	// 		.then(data => console.log(data))
	// }
</script>

<style lang="less" scoped></style>
