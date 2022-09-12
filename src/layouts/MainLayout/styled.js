import styled from 'styled-components'

export const StyledMainLayout = styled.div`
	display: grid;
	align-self: center;
	justify-self: center;
	grid-template-rows: 0.1fr [header-start] 2fr [header-end calendar-start] 3fr [calendar-end weather-start] 3fr [weather-end] 0.1fr;
	grid-template-columns: [application-start] 1fr [calendar-start] 8fr [calendar-end] 1fr [application-end];

	border: 0.2rem solid
		${({ theme }) => theme.colors.secondary};
	box-shadow: ${({ theme }) => theme.boxShadows[0]};
	width: 90vw;
	max-width: 100rem;
	min-height: 70rem;
	height: 80vh;
	max-height: 80rem;

	@media ${({ currentAPI }) =>
			currentAPI !== 'StormGlass'} {
		grid-template-rows: 0.1fr [header-start] 2fr [header-end calendar-start] 4fr [calendar-end weather-start] 2fr [weather-end] 0.1fr;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.large}) {
		width: 100vw;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.medium}) {
		width: 100vw;
		height: 100vh;

		grid-template-rows: 0.1fr [header-start] 2fr [header-end calendar-start] 3fr [calendar-end weather-start] 2fr [weather-end] 0.1fr;

		@media ${({ currentAPI }) =>
				currentAPI !== 'StormGlass'} {
			grid-template-rows: 0.1fr [header-start] 2fr [header-end calendar-start] 4fr [calendar-end weather-start] 2fr [weather-end] 0.1fr;
		}
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.small}) {
		max-height: 100vh;
	}
`
