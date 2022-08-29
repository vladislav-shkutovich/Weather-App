import styled from 'styled-components'

export const StyledHeaderContainer = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.error}; */
	grid-row: header-start / header-end;
	grid-column: application-start / application-end;

	display: grid;
	grid-template-rows: 0.5fr [header-start service-start] 1.9fr [service-end] 0.2fr [login-start] 1.9fr [login-end header-end] 0.5fr;
	grid-template-columns: 0.5fr [clocks-start] 4fr [clocks-end] 1fr [settings-start] 2fr [settings-end] 1fr [city-start] 4fr [city-end] 0.5fr;
`
