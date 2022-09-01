import styled from 'styled-components'

export const StyledLoginButton = styled.button`
	grid-row: login-start / login-end;
	grid-column: settings-start / settings-end;
	align-self: flex-start;
	justify-self: center;

	border: none;
	border-radius: 0.8rem;
	height: 4rem;
	width: 12rem;

	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSizes.medium}rem;
	background-color: ${({ theme }) =>
		theme.colors.secondary};
	color: ${({ theme }) => theme.colors.black};
	padding: ${({ theme }) => theme.paddings[1]}rem;

	& :hover {
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
		transform: scale(1.05);
	}

	& :active {
		transform: scale(0.95);
	}
`
