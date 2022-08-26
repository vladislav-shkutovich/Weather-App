import styled from 'styled-components'

export const StyledWeatherWeekly = styled.div`
	border: 0.3rem solid ${({ theme }) => theme.colors.error};
	grid-row: weather-start / weather-end;
	grid-column: weekly-start / weekly-end;
`
