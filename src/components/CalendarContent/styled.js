import styled from 'styled-components'

export const StyledCalendarContent = styled.div`
	border: 0.3rem solid ${({ theme }) => theme.colors.error};
	grid-row: calendar-start / calendar-end;
	grid-column: calendar-start / calendar-end;
`
