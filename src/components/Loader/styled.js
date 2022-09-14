import styled, { keyframes } from 'styled-components'

const spinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledLoader = styled.div`
	position: fixed;
	display: flex;
	align-self: center;
	justify-self: center;

	z-index: 2;
	border: 0.7rem solid ${({ theme }) => theme.colors.black};
	border-top: 0.7rem solid
		${({ theme }) => theme.colors.secondaryLight};
	border-radius: 50%;
	width: 6rem;
	height: 6rem;
	animation: ${spinnerAnimation} 1s linear infinite;
`
