import React, { useState, useEffect } from 'react'
import { getFullDate } from '@/helpers'
import {
	StyledClocks,
	StyledTime,
	StyledDayPart,
	StyledDate,
} from './styled'

export const Clocks = () => {
	// ! Временно, пока нет функционала для определения местоположения
	const timeZone = 'Europe/Minsk'
	const [dateAndTime, setDateAndTime] = useState(() =>
		getFullDate(),
	)

	useEffect(() => {
		const interval = setInterval(() => {
			setDateAndTime(getFullDate(timeZone))
		}, 1000)
		return () => clearInterval(interval)
	})

	return (
		<StyledClocks>
			<StyledTime>{dateAndTime.time}</StyledTime>
			<StyledDayPart>
				{dateAndTime.amPm.toUpperCase()}
			</StyledDayPart>
			<StyledDate>
				{dateAndTime.today}, {dateAndTime.day}
			</StyledDate>
		</StyledClocks>
	)
}
