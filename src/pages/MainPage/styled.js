import styled from 'styled-components'

export const StyledHeader = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.error}; */
	grid-row: header-start / header-end;
	grid-column: clocks-start / city-end;

	display: grid;
	grid-template-rows: 0.5fr [header-start] 4fr [header-end] 0.5fr;
	grid-template-columns: 0.5fr [clocks-start] 4fr [clocks-end] 1fr [settings-start] 2fr [settings-end] 1fr [city-start] 4fr [city-end] 0.5fr;
`
