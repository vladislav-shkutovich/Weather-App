const WEEKDAYS = [
	'MON',
	'TUE',
	'WED',
	'THU',
	'FRI',
	'SAT',
	'SUN',
]

export const dayInAWeek = new Date().getDay()

export const forecastDays = WEEKDAYS.slice(
	dayInAWeek,
	WEEKDAYS.length,
).concat(WEEKDAYS.slice(0, dayInAWeek - 1))
