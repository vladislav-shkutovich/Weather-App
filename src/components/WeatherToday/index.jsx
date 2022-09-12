import React from 'react'
import { getWeatherIcon } from '@/helpers'
import {
	StyledWeatherToday,
	StyledIcon,
	StyledLogo,
	StyledToday,
	StyledTemperature,
	StyledInfoContainer,
	StyledInfoLabel,
	StyledInfoDescription,
} from './styled'

export const WeatherToday = ({
	weatherTodayData,
	currentAPI,
}) => {
	const {
		tempToday,
		feelsLikeToday = '',
		humidityToday,
		windToday,
		iconToday = '10d',
		iconAltToday = '',
	} = weatherTodayData

	return (
		<StyledWeatherToday currentAPI={currentAPI}>
			{currentAPI === 'OpenWeather' ? (
				<StyledIcon
					alt={iconAltToday}
					src={getWeatherIcon(iconToday)}
				/>
			) : (
				<StyledLogo
					alt={iconAltToday}
					src="../../../public/assets/stormglassLogo.png"
				/>
			)}
			<StyledToday>NOW</StyledToday>
			<StyledTemperature>
				{Math.round(tempToday)}°C
			</StyledTemperature>
			<StyledInfoContainer>
				{currentAPI === 'OpenWeather' ? (
					<React.Fragment>
						<StyledInfoLabel>Feels Like:</StyledInfoLabel>
						<StyledInfoDescription>
							{feelsLikeToday}°C
						</StyledInfoDescription>
					</React.Fragment>
				) : null}
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
