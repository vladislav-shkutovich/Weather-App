import styled from 'styled-components'

export const StyledClocks = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.black}; */
	grid-row: header-start / header-end;
	grid-column: clocks-start / clocks-end;

	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-rows: 1fr [time-start] 3fr [time-end date-start] 2fr [date-end] 1fr;
	grid-template-columns: 1fr [time-start] 3fr [time-end daypart-start] 1fr [daypart-end] 1fr;
`

export const StyledTime = styled.p`
	grid-row: time-start / time-end;
	grid-column: time-start / time-end;
	font-size: ${({ theme }) => theme.fontSizes[8]}rem;
`

export const StyledDayPart = styled.p`
	grid-row: time-start / time-end;
	grid-column: daypart-start / daypart-end;
	font-size: ${({ theme }) => theme.fontSizes[5]}rem;
`

export const StyledDate = styled.p`
	grid-row: date-start / date-end;
	grid-column: time-start / daypart-end;
	font-size: ${({ theme }) => theme.fontSizes[2]}rem;
`
