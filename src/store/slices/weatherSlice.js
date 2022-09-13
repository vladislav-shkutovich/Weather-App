import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
	isLoading: false,
	lastUpdate: '',
}

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		fetchWeather(state) {
			state.isLoading = true
		},
		fetchWeatherSuccess(state, action) {
			state.isLoading = false
			state.weather = action.payload.data
			state.lastUpdate = new Date().getTime()
		},
		fetchWeatherError(state, action) {
			state.isLoading = false
		},
	},
})

export default weatherSlice.reducer
export const {
	fetchWeather,
	fetchWeatherError,
	fetchWeatherSuccess,
} = weatherSlice.actions
