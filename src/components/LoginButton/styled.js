import styled from 'styled-components'

export const StyledButton = styled.button`
	grid-row: ${({ rows }) => rows};
	grid-column: settings-start / settings-end;
	align-self: ${({ align }) => align};
	justify-self: center;

	border: none;
	border-radius: 0.4rem;
	height: 2.7rem;
	width: 12rem;

	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSizes.medium}rem;
	background: linear-gradient(
		to bottom left,
		${({ theme }) => theme.colors.highlight},
		${({ theme }) => theme.colors.highlightSecondary}
	);
	color: ${({ theme }) => theme.colors.black};
	padding: ${({ theme }) => theme.paddings[1]}rem;
	margin-bottom: ${({ theme }) => theme.margins[1]}rem;

	& :hover {
		background: linear-gradient(
			to top right,
			${({ theme }) => theme.colors.highlight},
			${({ theme }) => theme.colors.error}
		);
		transform: scale(1.02);
	}

	& :active {
		transform: scale(0.99);
	}

	@media ${({ colorType }) => colorType === 'red'} {
		background: linear-gradient(
			to bottom left,
			${({ theme }) => theme.colors.primary},
			${({ theme }) => theme.colors.secondary}
		);

		& :hover {
			background: linear-gradient(
				to top right,
				${({ theme }) => theme.colors.primary},
				${({ theme }) => theme.colors.highlightSecondary}
			);
			transform: scale(1.02);
		}
	}

	@media only screen and (max-width: ${({ theme }) =>
			theme.breakpoints.xs}) {
		width: 10rem;
		font-size: ${({ theme }) => theme.fontSizes.small}rem;
	}
`
