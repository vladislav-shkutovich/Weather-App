import styled from 'styled-components'

export const StyledServiceSelector = styled.select`
	grid-row: service-start / service-end;
	grid-column: settings-start / settings-end;
	align-self: flex-end;
	justify-self: center;
	text-align: center;

	height: 4rem;
	width: 12rem;
	border: none;
	border-radius: 0.5rem;

	font-size: ${({ theme }) => theme.fontSizes[1]}rem;
	background-color: ${({ theme }) =>
		theme.colors.secondary};
	color: ${({ theme }) => theme.colors.black};
	padding: ${({ theme }) => theme.paddings[1]}rem;

	& :hover {
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
	}

	& > option {
		color: ${({ theme }) => theme.colors.black};
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
	}
`
