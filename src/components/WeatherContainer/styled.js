import styled from 'styled-components'

export const StyledWeatherContainer = styled.div`
	grid-row: weather-start / weather-end;
	grid-column: application-start / application-end;
	background-color: ${({ theme }) =>
		theme.colors.secondary};
	box-shadow: ${({ theme }) => theme.boxShadows[2]};

	display: grid;
	grid-template-rows: 0.5fr [weather-start] 4fr [weather-end] 0.5fr;
	grid-template-columns: 0.5fr [today-start] 3fr [today-end] 0.2fr [weekly-start] 9fr [weekly-end] 0.5fr;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		grid-template-columns: 0.5fr [today-start] 3fr [today-end] 0fr [weekly-start] 9fr [weekly-end];
	}
`

export const StyledWeatherWeekly = styled.div`
	grid-row: weather-start / weather-end;
	grid-column: weekly-start / weekly-end;

	display: flex;
	column-gap: 1rem;
	flex-wrap: nowrap;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		column-gap: 0rem;
	}
`
