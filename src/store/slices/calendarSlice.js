import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLogin: false,
	calendarItems: [],
	// calendarItems: [
	// 	['Do morning exercises', '08:00'],
	// 	['Working on project #1', '10:00'],
	// 	['Learn some theory', '12:00'],
	// 	['Lunch', '14:00'],
	// 	['Working on project #1', '16:00'],
	// 	['Working on project #2', '18:00'],
	// 	['Drink some beer', '20:00'],
	// ],
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
		clearCalendarItems(state) {
			state.calendarItems = []
		},
	},
})

export default calendarSlice.reducer
export const {
	setLoginState,
	setCalendarItems,
	clearCalendarItems,
} = calendarSlice.actions
