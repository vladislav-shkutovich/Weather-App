import React from 'react'
import {
	StyledWeatherToday,
	StyledIcon,
	StyledToday,
	StyledTemperature,
} from './styled'

export const WeatherToday = ({
	day,
	weather,
	temperature,
}) => {
	console.log(weather)
	return (
		<StyledWeatherToday>
			<StyledIcon alt={weather} src={weather} />
			<StyledToday>Today</StyledToday>
			<StyledTemperature>{temperature}°C</StyledTemperature>
		</StyledWeatherToday>
	)
}
