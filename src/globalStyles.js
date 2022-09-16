import { createGlobalStyle } from 'styled-components'
import theme from '@/themes'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
	
  html, body {
		font-family: ${theme.font};
		font-size: 62.5%;
		color: ${({ theme }) => theme.colors.black};
		width: 100%;
		height: 100%;

		@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.small}) {
		font-size: 50%;
		}
  }

	#root {
		font-size: 1.6rem;
		width: 100%;
		height: 100%;
		display: grid;
		background-image: url('../public/assets/${({
			currentWeatherName,
		}) => currentWeatherName}.jpg');
		
		background-size: cover;
    background-position: center;

		overflow-y: auto;

	& ::-webkit-scrollbar {
		width: 0.8rem;
		height: 0.6rem;
	}

	& ::-webkit-scrollbar-thumb {
		border-radius: 5px;
		border: 2px solid
			${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.background};
	}

	& ::-webkit-scrollbar-track {
		border-radius: 5px;
		border: 2px solid
			${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.secondary};
	}
  }
`
