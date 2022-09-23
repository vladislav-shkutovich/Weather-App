import moment from 'moment-timezone'

export const getFullDate = timeZone => {
	if (!timeZone)
		return {
			time: moment().format('hh:mm'),
			amPm: moment()
				.format('a')
				.toUpperCase(),
			today: moment().format('dddd'),
			day: moment().format('LL'),
			fullDate: moment().format(),
		}
	return {
		time: moment()
			.tz(timeZone)
			.format('hh:mm'),
		amPm: moment()
			.tz(timeZone)
			.format('a')
			.toUpperCase(),
		today: moment()
			.tz(timeZone)
			.format('dddd'),
		day: moment()
			.tz(timeZone)
			.format('LL'),
		fullDate: moment()
			.tz(timeZone)
			.format(),
	}
}
