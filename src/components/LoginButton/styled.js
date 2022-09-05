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
	background: linear-gradient(
		to bottom left,
		${({ theme }) => theme.colors.primary},
		${({ theme }) => theme.colors.secondary}
	);
	color: ${({ theme }) => theme.colors.black};
	padding: ${({ theme }) => theme.paddings[1]}rem;

	& :hover {
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
		transform: scale(1.03);
	}

	& :active {
		transform: scale(0.98);
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		width: 10rem;
		font-size: ${({ theme }) => theme.fontSizes.small}rem;
	}
`
