<template>
	<div>
		<h1 style="margin: 10vw 0 auto; text-align: center">test foundation for test data</h1>
		<media-controller audio>
			<audio
				slot="media"
				src="https://stream.mux.com/O4h5z00885HEucNNa1rV02wZapcGp01FXXoJd35AHmGX7g/audio.m4a"
			></audio>
			<media-control-bar>
				<media-play-button></media-play-button>
				<media-time-display show-duration></media-time-display>
				<media-time-range></media-time-range>
				<media-playback-rate-button></media-playback-rate-button>
				<media-mute-button></media-mute-button>
				<media-volume-range></media-volume-range>
			</media-control-bar>
		</media-controller>
	</div>
</template>

<script setup>
	import 'media-chrome'
	import { timeSwtich } from '/src/function/timeSwtich'

	console.log(timeSwtich('524531354568'))
</script>

<style lang="less" scoped>
	.media-controller {
		border-radius: 30% !important;
	}
</style>
