import React from 'react'
import { StyledButton } from './styled'
import { selectLogin } from '@/store/selectors'
import { useSelector } from 'react-redux'
import { useCalendar } from '@/hooks/useCalendar'

export const LoginButton = () => {
	const isLogin = useSelector(selectLogin)
	const {
		handleSignInClick,
		handleSignOutClick,
		getEvents,
	} = useCalendar()

	return (
		<React.Fragment>
			{!isLogin ? (
				<StyledButton
					rows="login-start / separation"
					align="flex-end"
					onClick={handleSignInClick}>
					Sign In
				</StyledButton>
			) : (
				<StyledButton
					rows="login-start / separation"
					colorType="red"
					align="flex-end"
					onClick={handleSignOutClick}>
					Sign Out
				</StyledButton>
			)}
			<StyledButton
				rows="separation / login-end"
				align="flex-start"
				onClick={getEvents}>
				Get Events
			</StyledButton>
		</React.Fragment>
	)
}
