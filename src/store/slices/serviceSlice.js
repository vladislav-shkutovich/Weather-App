import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	serviceIsTouched: false,
	currentAPI: 'OpenWeather',
}

export const serviceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {
		touchService(state) {
			state.serviceIsTouched = true
		},
		setCurrentAPI(state, action) {
			state.serviceIsTouched = false
			state.currentAPI = action.payload
		},
	},
})

export default serviceSlice.reducer
export const {
	touchService,
	setCurrentAPI,
} = serviceSlice.actions
