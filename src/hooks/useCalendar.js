import { useDispatch } from 'react-redux'
import ApiCalendar from 'react-google-calendar-api'
import { calendarAPIConfig } from '@/constants'
import {
	setLoginState,
	setCalendarItems,
	setCalendarMessage,
	clearCalendarItems,
} from '@/store/slices/calendarSlice'

export const useCalendar = () => {
	const dispatch = useDispatch()
	const apiCalendar = new ApiCalendar(calendarAPIConfig)

	const handleSignInClick = () => {
		apiCalendar.handleAuthClick()
		dispatch(setLoginState(true))
		dispatch(
			setCalendarMessage(
				'Click the "Get Events" button to display your events from the calendar.',
			),
		)
	}

	const handleSignOutClick = () => {
		apiCalendar.handleSignoutClick()
		dispatch(setLoginState(false))
		dispatch(clearCalendarItems())
		dispatch(
			setCalendarMessage(
				'Please sign in with Google to get events from your calendar.',
			),
		)
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

	return {
		handleSignInClick,
		handleSignOutClick,
		getEvents,
	}
}
