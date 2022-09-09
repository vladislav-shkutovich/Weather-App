import React from 'react'
import { getWeatherIcon } from '@/helpers'
import {
	StyledWeatherToday,
	StyledIcon,
	StyledToday,
	StyledTemperature,
	StyledInfoContainer,
	StyledInfoLabel,
	StyledInfoDescription,
} from './styled'

export const WeatherToday = ({ weatherTodayData }) => {
	const {
		tempToday,
		feelsLikeToday,
		humidityToday,
		windToday,
		iconToday = '10d',
		iconAltToday,
	} = weatherTodayData

	return (
		<StyledWeatherToday>
			<StyledIcon
				alt={iconAltToday}
				src={getWeatherIcon(iconToday)}
			/>
			<StyledToday>NOW</StyledToday>
			<StyledTemperature>
				{Math.round(tempToday)}°C
			</StyledTemperature>
			<StyledInfoContainer>
				<StyledInfoLabel>Feels Like:</StyledInfoLabel>
				<StyledInfoDescription>
					{feelsLikeToday}°C
				</StyledInfoDescription>
				<StyledInfoLabel>Humidity:</StyledInfoLabel>
				<StyledInfoDescription>
					{humidityToday}%
				</StyledInfoDescription>
				<StyledInfoLabel>Wind:</StyledInfoLabel>
				<StyledInfoDescription>
					{windToday} m/s
				</StyledInfoDescription>
			</StyledInfoContainer>
		</StyledWeatherToday>
	)
}
