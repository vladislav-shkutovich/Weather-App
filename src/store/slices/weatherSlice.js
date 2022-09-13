import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
	isLoading: false,
	lastUpdate: '',
	// cityName: 'Brest',
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
			// state.weather = {
			// 	...action.payload.data,
			// 	[action.payload.data.city.name]:
			// 		action.payload.data.city.name,
			// }
			state.lastUpdate = new Date().getTime()
			// state.cityName = action.payload?.data?.city.name
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
