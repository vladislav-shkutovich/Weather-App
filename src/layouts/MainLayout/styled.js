import styled from 'styled-components'

export const StyledMainLayout = styled.div`
	border: 0.2rem solid
		${({ theme }) => theme.colors.secondary};
	box-shadow: ${({ theme }) => theme.boxShadows[0]};
	width: 90vw;
	height: 80vh;
	display: grid;
	align-self: center;
	justify-self: center;
	grid-template-rows: [header-start] 3fr [header-end calendar-start] 3fr [calendar-end weather-start] 3fr [weather-end];
	grid-template-columns: [clocks-start] 4fr [clocks-end settings-start] 3fr [settings-end city-start] 4fr [city-end];
`
