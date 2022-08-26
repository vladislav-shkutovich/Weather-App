import styled from 'styled-components'

export const StyledCitySelector = styled.div`
	border: 0.3rem solid ${({ theme }) => theme.colors.error};
	grid-row: header-start / header-end;
	grid-column: city-start / city-end;
`
