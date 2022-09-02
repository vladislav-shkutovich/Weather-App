import React from 'react'
import { CalendarItem } from '../CalendarItem'
import { StyledCalendar } from './styled'

export const Calendar = () => {
	const DUMMY_TASKS = [
		['Do morning exercises', '08:00'],
		['Working on project #1', '10:00'],
		['Learn some theory', '12:00'],
		['Lunch', '14:00'],
		['Working on project #1', '16:00'],
		['Working on project #2', '18:00'],
		['Drink some beer', '20:00'],
	]

	return (
		<StyledCalendar>
			{DUMMY_TASKS.map((item, index) => (
				<CalendarItem
					key={index}
					text={item[0]}
					time={item[1]}
				/>
			))}
		</StyledCalendar>
	)
}
