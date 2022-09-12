import React from 'react'
import { getWeatherIcon } from '@/helpers'
import {
	StyledWeatherWeeklyItem,
	StyledDay,
	StyledIcon,
	StyledTemperature,
} from './styled'

export const WeatherWeeklyItem = ({
	day,
	icon = '10d',
	iconAlt,
	temp,
	currentAPI,
}) => {
	return (
		<StyledWeatherWeeklyItem>
			<StyledDay>{day}</StyledDay>
			{currentAPI === 'OpenWeather' ? (
				<StyledIcon
					alt={iconAlt}
					src={getWeatherIcon(icon)}
				/>
			) : null}
			<StyledTemperature>{temp}°C</StyledTemperature>
		</StyledWeatherWeeklyItem>
	)
}
