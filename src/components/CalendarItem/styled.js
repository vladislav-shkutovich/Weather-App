import styled from 'styled-components'

export const StyledCalendarItem = styled.div`
	/* border: 0.3rem solid ${({ theme }) =>
		theme.colors.error}; */
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.paddings[1]}rem;
	column-gap: 2rem;
`

export const StyledTaskTime = styled.div`
	padding: ${({ theme }) => theme.paddings[2]}rem;
	background: linear-gradient(
		to bottom right,
		${({ theme }) => theme.colors.primary},
		${({ theme }) => theme.colors.secondary}
	);
	border-radius: 1rem;
	font-size: ${({ theme }) => theme.fontSizes.medium}rem;
`

export const StyledTaskText = styled.p`
	font-size: ${({ theme }) => theme.regular}rem;
`
