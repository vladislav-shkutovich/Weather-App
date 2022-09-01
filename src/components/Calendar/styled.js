import styled from 'styled-components'

export const StyledCalendar = styled.div`
	grid-row: calendar-start / calendar-end;
	grid-column: calendar-start / calendar-end;

	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	overflow: auto;

	& ::-webkit-scrollbar {
		width: 0.6rem;
		height: 0.6rem;
	}

	& ::-webkit-scrollbar-thumb {
		border-radius: 5px;
		border: 2px solid
			${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.black};
	}

	& ::-webkit-scrollbar-track {
		background-color: ${({ theme }) =>
			theme.colors.secondaryLight};
	}
`
