import React from 'react'
import {
	StyledCalendarItem,
	StyledTaskTime,
	StyledTaskText,
} from './styled'

export const CalendarItem = ({ item, isLast }) => {
	const eventStartTime = new Date(item.start.dateTime)
	const eventEndTime = new Date(item.end.dateTime)

	let wholeDayTask = false
	if (
		!eventStartTime.getHours() ||
		!eventEndTime.getHours()
	)
		wholeDayTask = true

	const formattedTime = `${eventStartTime.getHours()}:${
		eventStartTime.getMinutes()
			? eventStartTime.getMinutes()
			: `${eventStartTime.getMinutes()}0`
	} 
	- ${eventEndTime.getHours()}:${
		eventEndTime.getMinutes()
			? eventEndTime.getMinutes()
			: `${eventEndTime.getMinutes()}0`
	}`

	return (
		<StyledCalendarItem>
			<StyledTaskTime isLast={isLast}>
				{wholeDayTask ? 'All Day Long' : formattedTime}
			</StyledTaskTime>
			<StyledTaskText>{item.summary}</StyledTaskText>
		</StyledCalendarItem>
	)
}
