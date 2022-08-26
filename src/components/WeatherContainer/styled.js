import styled from 'styled-components'

export const StyledWeatherContainer = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.error}; */
	grid-row: weather-start / weather-end;
	grid-column: application-start / application-end;

	display: grid;
	grid-template-rows: 0.5fr [weather-start] 4fr [weather-end] 0.5fr;
	grid-template-columns: 0.5fr [today-start] 4fr [today-end] 0.5fr [weekly-start] 8fr [weekly-end] 0.5fr;
`
