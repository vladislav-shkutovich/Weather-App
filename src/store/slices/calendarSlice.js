import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLogin: false,
	calendarItems: [],
	calendarMessage:
		'Please sign in with Google to get events from your calendar.',
}

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		setLoginState(state, action) {
			state.isLogin = action.payload
		},
		setCalendarItems(state, action) {
			state.calendarItems = action.payload
		},
		setCalendarMessage(state, action) {
			state.calendarMessage = action.payload
		},
		clearCalendarItems(state) {
			state.calendarItems = []
		},
	},
})

export default calendarSlice.reducer
export const {
	setLoginState,
	setCalendarItems,
	setCalendarMessage,
	clearCalendarItems,
} = calendarSlice.actions
