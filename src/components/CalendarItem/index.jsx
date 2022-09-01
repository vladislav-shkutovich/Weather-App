import React from 'react'
import {
	StyledCalendarItem,
	StyledTaskTime,
	StyledTaskText,
} from './styled'

export const CalendarItem = ({ time, text }) => {
	return (
		<StyledCalendarItem>
			<StyledTaskTime>{time}</StyledTaskTime>
			<StyledTaskText>{text}</StyledTaskText>
		</StyledCalendarItem>
	)
}
