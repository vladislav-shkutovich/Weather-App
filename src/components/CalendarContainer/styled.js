import styled from 'styled-components'

export const StyledCalendarContainer = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.error}; */
	grid-row: calendar-start / calendar-end;
	grid-column: clocks-start / city-end;

	display: grid;
	grid-template-rows: 0.2fr [calendar-start] 4fr [calendar-end] 0.2fr;
	grid-template-columns: 0.5fr [calendar-start] 12fr [calendar-end] 0.5fr;
`
