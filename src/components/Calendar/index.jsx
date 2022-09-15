import React from 'react'
import { useSelector } from 'react-redux'
import { selectCalendarItems } from '@/store/selectors/selectCalendarItems'
import { selectLogin } from '@/store/selectors'
import { CalendarItem } from '../CalendarItem'
import { StyledCalendar } from './styled'

export const Calendar = () => {
	const calendarItems = useSelector(selectCalendarItems)
	const isLogin = useSelector(selectLogin)

	const initialText = isLogin
		? 'Your event list is empty.'
		: 'Please sign in with Google to get events from your calendar.'

	return (
		<StyledCalendar>
			{calendarItems.length !== 0
				? calendarItems.map((item, index) => (
						<CalendarItem
							key={index}
							text={item[0]}
							time={item[1]}
						/>
				  ))
				: initialText}
		</StyledCalendar>
	)
}
