import styled from 'styled-components'

export const StyledWeatherWeeklyItem = styled.div`
	height: 100%;
	width: 16%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.boxShadows[1]};
	padding: ${({ theme }) => theme.paddings[3]}rem;
`

export const StyledDay = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.regular}rem;
	padding: ${({ theme }) => theme.paddings[1]}rem
		${({ theme }) => theme.paddings[3]}rem;
	margin-top: ${({ theme }) => theme.margins[2]}rem;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 1rem;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.small}) {
		margin-top: ${({ theme }) => theme.margins[5]}rem;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		font-size: ${({ theme }) => theme.fontSizes.medium}rem;
	}
`

export const StyledIcon = styled.img`
	justify-self: center;
	background-size: cover;
	border-radius: 2rem;
	width: 70%;
	max-width: 8rem;
`

export const StyledTemperature = styled.p`
	font-size: ${({ theme }) =>
		theme.fontSizes.temperatureWeekly}rem;
	margin-bottom: ${({ theme }) => theme.margins[2]}rem;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.small}) {
		margin-bottom: ${({ theme }) => theme.margins[5]}rem;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		font-size: ${({ theme }) => theme.fontSizes.large}rem;
	}
`
