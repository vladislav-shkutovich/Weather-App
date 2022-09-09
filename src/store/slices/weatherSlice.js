import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// 	weather: {
// 		main: {
// 			temp: 0,
// 		},
// 		weather: [{ icon: '04d', main: 'Clouds' }],
// 	},
// 	isLoading: false,
// 	response: {
// 		status: 0,
// 		message: '',
// 	},
// }

const initialState = {
	list: [
		{
			dt_txt: '2022-09-09 09:00:00',
			main: { temp: 0 },
			weather: [{ icon: '10d', main: 'Rain' }],
		},
	],
	isLoading: false,
	response: {
		status: 0,
		message: '',
	},
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
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},
		fetchWeatherError(state, action) {
			state.isLoading = false
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},
	},
})

export default weatherSlice.reducer
export const {
	fetchWeather,
	fetchWeatherError,
	fetchWeatherSuccess,
} = weatherSlice.actions
