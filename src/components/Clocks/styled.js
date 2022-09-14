import styled from 'styled-components'

export const StyledClocks = styled.div`
	grid-row: header-start / header-end;
	grid-column: clocks-start / clocks-end;

	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-rows: 0.5fr [time-start] 3.5fr [time-end] 0.5fr [date-start] 2fr [date-end] 1fr;
	grid-template-columns: 1fr [time-start] 4fr [time-end] 0.2fr [daypart-start] 1.8fr [daypart-end] 1fr;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xxs}) {
		grid-template-columns: 1fr [time-start] 4fr [time-end] 0.2fr [daypart-start] 1.8fr [daypart-end] 0.2fr;
	}
`

export const StyledTime = styled.p`
	grid-row: time-start / time-end;
	grid-column: time-start / time-end;
	align-self: flex-end;
	justify-self: right;
	font-size: ${({ theme }) => theme.fontSizes.xxlarge}rem;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.medium}) {
		font-size: ${({ theme }) => theme.fontSizes.xlarge}rem;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xxs}) {
		font-size: ${({ theme }) =>
			theme.fontSizes.clocksTimeMedia}rem;
	}
`

export const StyledDayPart = styled.p`
	grid-row: time-start / time-end;
	grid-column: daypart-start / daypart-end;
	justify-self: left;
	font-size: ${({ theme }) => theme.fontSizes.medium}rem;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.medium}) {
		margin-top: ${({ theme }) => theme.margins[6]}rem;
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.small}) {
		margin-top: ${({ theme }) => theme.margins[8]}rem;
	}
`

export const StyledDate = styled.p`
	grid-row: date-start / date-end;
	grid-column: time-start / daypart-end;
	align-self: flex-start;
	font-size: ${({ theme }) => theme.fontSizes.medium}rem;
	text-align: center;

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xxs}) {
		font-size: ${({ theme }) => theme.fontSizes.small}rem;
	}
`
