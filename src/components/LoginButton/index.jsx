import React from 'react'
import ApiCalendar from 'react-google-calendar-api'
import { StyledButton } from './styled'
import { selectLogin } from '@/store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import {
	setLoginState,
	setCalendarItems,
	setCalendarMessage,
	clearCalendarItems,
} from '@/store/slices/calendarSlice'

export const LoginButton = () => {
	const dispatch = useDispatch()
	const isLogin = useSelector(selectLogin)

	const config = {
		clientId:
			'1056593856628-4udlo84ttgknfe6sp13f8kj96ekhk802.apps.googleusercontent.com',
		apiKey: 'AIzaSyBro4foFC_Qq_q7OgaTjpFqEn07oYJSeXU',
		scope: 'https://www.googleapis.com/auth/calendar',
		discoveryDocs: [
			'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
		],
	}

	const apiCalendar = new ApiCalendar(config)

	const handleItemClick = (event, name) => {
		if (name === 'sign-in') {
			apiCalendar.handleAuthClick()
			dispatch(setLoginState(true))
			dispatch(
				setCalendarMessage(
					'Click the "Get Events" button to display your events from the calendar.',
				),
			)
		} else if (name === 'sign-out') {
			apiCalendar.handleSignoutClick()
			dispatch(setLoginState(false))
			dispatch(clearCalendarItems())
			dispatch(
				setCalendarMessage(
					'Please sign in with Google to get events from your calendar.',
				),
			)
		}
	}

	const getEvents = () => {
		try {
			apiCalendar
				.listUpcomingEvents(10)
				.then(({ result }) => {
					dispatch(setCalendarItems(result.items))
					if (result.items.length === 0)
						dispatch(
							setCalendarMessage(
								'You have no more events for today.',
							),
						)
				})
				.catch(() => {
					dispatch(setLoginState(false))
					alert('You need to authorize!')
				})
		} catch {
			alert('Something went wrong with Google Auth...')
		}
	}

	return (
		// eslint-disable-next-line react/jsx-fragments
		<>
			{!isLogin ? (
				<StyledButton
					rows="login-start / separation"
					align="flex-end"
					onClick={e => handleItemClick(e, 'sign-in')}>
					Sign In
				</StyledButton>
			) : (
				<StyledButton
					rows="login-start / separation"
					colorType="red"
					align="flex-end"
					onClick={e => handleItemClick(e, 'sign-out')}>
					Sign Out
				</StyledButton>
			)}
			<StyledButton
				rows="separation / login-end"
				align="flex-start"
				onClick={() => getEvents()}>
				Get Events
			</StyledButton>
		</>
	)
}
