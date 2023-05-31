export const timeSwitch = timeStamp => {
	const front =
		Math.floor((timeStamp / (1000 * 60)) % 60) >= 10
			? Math.floor((timeStamp / (1000 * 60)) % 60)
			: '0' + Math.floor((timeStamp / (1000 * 60)) % 60)

	const back =
		Math.floor(
			(((timeStamp / (1000 * 60)) % 60) - Math.floor((timeStamp / (1000 * 60)) % 60)).toFixed(2) *
				60
		) >= 10
			? Math.floor(
					(((timeStamp / (1000 * 60)) % 60) - Math.floor((timeStamp / (1000 * 60)) % 60)).toFixed(
						2
					) * 60
			  )
			: '0' +
			  Math.floor(
					(((timeStamp / (1000 * 60)) % 60) - Math.floor((timeStamp / (1000 * 60)) % 60)).toFixed(
						2
					) * 60
			  )

	return front + ' : ' + back
}
