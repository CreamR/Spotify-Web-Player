const BetweenIS = (setedStarTime: String, setedEndTime: String): boolean | undefined => {
	if (setedStarTime.length == 5 && setedEndTime.length == 5) {
		const nowHour: Number = new Date().getHours()
		const nowMin: Number = new Date().getMinutes()

		if (parseInt(setedStarTime.slice(0, 2)) <= nowHour) {
			if (
				parseInt(setedStarTime.slice(0, 2)) == nowHour &&
				parseInt(setedStarTime.slice(3, 5)) > nowMin
			) {
				console.log('invalid time')
				return false
			} else {
				if (parseInt(setedEndTime.slice(0, 2)) >= nowHour) {
					if (
						parseInt(setedEndTime.slice(0, 2)) == nowHour &&
						parseInt(setedEndTime.slice(3, 5)) < nowMin
					) {
						console.log('invalid time')
						return false
					} else {
						console.log('valid time')
						return true
					}
				}
			}
		} else {
			console.log('invalid time')
			return false
		}
	}
}
export default BetweenIS

// TEST
const result: boolean | undefined = BetweenIS('15:00', '15:10')
console.log(result)
