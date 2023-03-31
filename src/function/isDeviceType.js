export const isDeviceType = () => {
	const userType = navigator.userAgent

	if (userType.includes('MSIE')) return false
	else if (userType.includes('FireFox')) return 'FireFox'
	else if (userType.includes('Chrome')) return 'Chromium'
	else if (userType.includes('Opera')) return 'Opera'
	else if (userType.includes('Safari')) return 'Safari'
	else return 'NULL'
}
