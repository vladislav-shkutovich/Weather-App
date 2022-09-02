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
		background-image: linear-gradient(to bottom, ${({
			theme,
		}) => theme.colors.backgroundImage}, ${({ theme }) =>
	theme.colors
		.backgroundImageSecondary}), url('../public/assets/background.jpg');
		background-size: cover;
    background-position: center;
  }
`
