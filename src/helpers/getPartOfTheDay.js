const currentHour = new Date().getHours()
const nightStart = 19
const dayStart = 7

export const partOfTheDay =
	currentHour < dayStart || currentHour > nightStart
		? 'Night'
		: 'Day'
