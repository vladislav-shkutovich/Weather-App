import React from 'react'
import { getWeatherIcon } from '@/helpers'
import {
	StyledWeatherToday,
	StyledIcon,
	StyledToday,
	StyledTemperature,
} from './styled'

export const WeatherToday = ({ weather }) => {
	// eslint-disable-next-line prefer-destructuring
	const { icon, main } = weather.weather[0]
	const { temp } = weather.main

	return (
		<StyledWeatherToday>
			<StyledIcon alt={main} src={getWeatherIcon(icon)} />
			<StyledToday>Today</StyledToday>
			<StyledTemperature>
				{Math.round(temp)}°C
			</StyledTemperature>
		</StyledWeatherToday>
	)
}
