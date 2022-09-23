import React from 'react'
import { useSelector } from 'react-redux'
import {
	selectCalendarMessage,
	selectCalendarItems,
} from '@/store/selectors'
import { CalendarItem } from '../CalendarItem'
import { StyledCalendar } from './styled'

export const Calendar = () => {
	const calendarItems = useSelector(selectCalendarItems)
	const calendarMessage = useSelector(selectCalendarMessage)

	return (
		<StyledCalendar>
			{calendarItems.length !== 0
				? calendarItems.map((item, index) => (
						<CalendarItem
							key={item.id}
							item={item}
							isLast={calendarItems.length - 1 === index}
						/>
				  ))
				: calendarMessage}
		</StyledCalendar>
	)
}
