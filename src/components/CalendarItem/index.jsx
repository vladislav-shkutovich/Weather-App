import React from 'react'
import {
	StyledCalendarItem,
	StyledTaskTime,
	StyledTaskText,
} from './styled'
import { getFormattedTaskData } from '@/helpers'

export const CalendarItem = ({ item, isLast }) => {
	const {
		isWholeDayTask,
		formattedTime,
	} = getFormattedTaskData(item)

	return (
		<StyledCalendarItem>
			<StyledTaskTime isLast={isLast}>
				{isWholeDayTask ? 'All Day Long' : formattedTime}
			</StyledTaskTime>
			<StyledTaskText>{item.summary}</StyledTaskText>
		</StyledCalendarItem>
	)
}
