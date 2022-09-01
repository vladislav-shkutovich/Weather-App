import styled from 'styled-components'

export const StyledFrom = styled.form`
	grid-row: header-start / header-end;
	grid-column: city-start / city-end;

	display: grid;
	grid-template-rows: 1fr [input-start] 3fr [input-end] 0.5fr [country-start button-start] 2fr [country-end button-end] 2fr;
	grid-template-columns: 1fr [input-start country-start button-start] 4fr [country-end button-end] 1fr [ input-end] 1fr;
`

export const StyledInput = styled.input`
	grid-row: input-start / input-end;
	grid-column: input-start / input-end;
	align-self: flex-end;

	height: 3rem;
	font-size: ${({ theme }) => theme.fontSizes.xlarge}rem;
	color: ${({ theme }) => theme.colors.black};
	background: none;
	border: none;
`

export const StyledCountryName = styled.p`
	grid-row: country-start / country-end;
	grid-column: country-start / country-end;
	align-self: flex-start;
	padding-left: ${({ theme }) => theme.paddings[2]}rem;

	font-size: ${({ theme }) => theme.fontSizes.regular}rem;
`

export const StyledSearchButton = styled.button`
	grid-row: button-start / button-end;
	grid-column: button-start / button-end;
	align-self: flex-start;

	border: none;
	font-size: ${({ theme }) => theme.fontSizes.regular}rem;
	background-color: ${({ theme }) =>
		theme.colors.secondary};
	color: ${({ theme }) => theme.colors.black};
	height: 3rem;
	width: 8rem;

	& :hover {
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
		transform: scale(1.05);
	}

	& :active {
		transform: scale(0.95);
	}
`
