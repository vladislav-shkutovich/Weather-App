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
}) => {
	return (
		<StyledWeatherWeeklyItem>
			<StyledDay>{day}</StyledDay>
			<StyledIcon
				alt={iconAlt}
				src={getWeatherIcon(icon)}
			/>
			<StyledTemperature>{temp}°C</StyledTemperature>
		</StyledWeatherWeeklyItem>
	)
}
