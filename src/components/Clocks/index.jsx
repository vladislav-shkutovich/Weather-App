import React, { useState, useRef, useEffect } from 'react'
import { getFullDate } from '@/helpers'
import {
	StyledClocks,
	StyledTime,
	StyledDayPart,
	StyledDate,
} from './styled'
import { timeZone } from '@/constants'

export const Clocks = () => {
	const intervalId = useRef()
	const [dateAndTime, setDateAndTime] = useState(() =>
		getFullDate(),
	)
	const { time, amPm, today, day } = dateAndTime

	useEffect(() => {
		intervalId.current = setInterval(() => {
			setDateAndTime(getFullDate(timeZone))
		}, 1000)
		return () => clearInterval(intervalId.current)
	})

	return (
		<StyledClocks>
			<StyledTime>{time}</StyledTime>
			<StyledDayPart>{amPm}</StyledDayPart>
			<StyledDate>
				{today}, {day}
			</StyledDate>
		</StyledClocks>
	)
}
