import styled from 'styled-components'

export const StyledClocks = styled.div`
	border: 0.3rem solid ${({ theme }) => theme.colors.error};
	grid-row: header-start / header-end;
	grid-column: clocks-start / clocks-end;
`
