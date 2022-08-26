import styled from 'styled-components'

export const StyledMainLayout = styled.div`
	border: 0.2rem solid
		${({ theme }) => theme.colors.secondary};
	box-shadow: ${({ theme }) => theme.boxShadows[0]};
	width: 90vw;
	max-width: 100rem;
	height: 80vh;
	max-height: 80rem;
	display: grid;
	align-self: center;
	justify-self: center;
	grid-template-rows: 0.1fr [header-start] 3fr [header-end calendar-start] 3fr [calendar-end weather-start] 3fr [weather-end] 0.1fr;
	grid-template-columns: [application-start] 10fr [application-end];
`
