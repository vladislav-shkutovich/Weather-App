import React from 'react'
import {
	StyledWeatherWeeklyItem,
	StyledDay,
	StyledIcon,
	StyledTemperature,
} from './styled'

export const WeatherWeeklyItem = ({
	day,
	weather,
	temperature,
}) => {
	return (
		<StyledWeatherWeeklyItem>
			<StyledDay>{day}</StyledDay>
			<StyledIcon alt={weather} src={weather} />
			<StyledTemperature>{temperature}°C</StyledTemperature>
		</StyledWeatherWeeklyItem>
	)
}
