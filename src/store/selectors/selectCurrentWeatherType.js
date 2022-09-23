export const selectCurrentWeatherType = state =>
	state.weatherState?.weather?.list?.at(0).weather.at(0)
		.main
