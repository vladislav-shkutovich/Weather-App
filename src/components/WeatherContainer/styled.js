import styled from 'styled-components'

export const StyledWeatherContainer = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.error}; */
	grid-row: weather-start / weather-end;
	grid-column: application-start / application-end;
	background-color: ${({ theme }) => theme.colors.secondary};
	box-shadow: ${({ theme }) => theme.boxShadows[2]};

	display: grid;
	grid-template-rows: 0.5fr [weather-start] 4fr [weather-end] 0.5fr;
	grid-template-columns: 0.5fr [today-start] 3fr [today-end] 0.2fr [weekly-start] 9fr [weekly-end] 0.5fr;
`

export const StyledWeatherWeekly = styled.div`
	grid-row: weather-start / weather-end;
	grid-column: weekly-start / weekly-end;

	display: flex;
	column-gap: 1rem;
	flex-wrap: nowrap;
`
