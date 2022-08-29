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
		/* -webkit-text-stroke: 0.5px ${({ theme }) =>
			theme.colors.white}; */
		width: 100%;
		height: 100%;
  }

	#root {
		font-size: 1.6rem;
		width: 100%;
		height: 100%;
		display: grid;
		background: linear-gradient(to bottom, ${({ theme }) =>
			theme.colors.background}, ${({ theme }) =>
	theme.colors.secondaryLight}) 100% 100% no-repeat;
		background-size: cover;
    background-position: center;
    }
`
