import React from 'react'
import {
	StyledClocks,
	StyledTime,
	StyledDayPart,
	StyledDate,
} from './styled'

export const Clocks = () => {
	return (
		<StyledClocks>
			<StyledTime>09:37</StyledTime>
			<StyledDayPart>AM</StyledDayPart>
			<StyledDate>Friday, 26 August 2022</StyledDate>
		</StyledClocks>
	)
}
