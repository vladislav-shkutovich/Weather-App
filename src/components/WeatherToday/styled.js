import styled from 'styled-components'

export const StyledWeatherToday = styled.div`
	border: 0.3rem solid ${({ theme }) => theme.colors.error};
	grid-row: weather-start / weather-end;
	grid-column: today-start / today-end;
`
