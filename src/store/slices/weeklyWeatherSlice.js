import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [
		{
			temp: { day: 0, night: 0 },
			weather: [
				{
					icon: '10d',
				},
			],
		},
	],
	isLoading: false,
	response: {
		status: 0,
		message: '',
	},
}

export const weeklyWeatherSlice = createSlice({
	name: 'weekly_weather',
	initialState,
	reducers: {
		fetchWeeklyWeather(state) {
			state.isLoading = true
		},
		fetchWeeklyWeatherSuccess(state, action) {
			state.isLoading = false
			state.weather = action.payload.data
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},
		fetchWeeklyWeatherError(state, action) {
			state.isLoading = false
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},
	},
})

export default weeklyWeatherSlice.reducer
export const {
	fetchWeeklyWeather,
	fetchWeeklyWeatherError,
	fetchWeeklyWeatherSuccess,
} = weeklyWeatherSlice.actions
