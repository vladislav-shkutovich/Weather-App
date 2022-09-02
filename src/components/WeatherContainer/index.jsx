import React from 'react'
import { WeatherToday } from '@/components/WeatherToday'
import { WeatherWeeklyItem } from '@/components/WeatherWeeklyItem'
import {
	StyledWeatherContainer,
	StyledWeatherWeekly,
} from './styled'

export const WeatherContainer = () => {
	const DUMMY_WEATHER_DATA = {
		monday: {
			day: 'Mon',
			weather: 'Rain',
			temperature: 15,
		},
		tuesday: {
			day: 'Tue',
			weather: 'Sunny',
			temperature: 17,
		},
		wednesday: {
			day: 'Wed',
			weather: 'Sunny',
			temperature: 15,
		},
		thursday: {
			day: 'Thu',
			weather: 'Rain',
			temperature: 21,
		},
		friday: {
			day: 'Fri',
			weather: 'Fog',
			temperature: 19,
		},
		saturday: {
			day: 'Sat',
			weather: 'Fog',
			temperature: 22,
		},
		sunday: {
			day: 'Sun',
			weather: 'Thunder',
			temperature: 21,
		},
	}

	return (
		<StyledWeatherContainer>
			<WeatherToday
				day={DUMMY_WEATHER_DATA.monday.day}
				weather={DUMMY_WEATHER_DATA.monday.weather}
				temperature={DUMMY_WEATHER_DATA.monday.temperature}
			/>
			<StyledWeatherWeekly>
				{Object.values(DUMMY_WEATHER_DATA)
					.slice(1, DUMMY_WEATHER_DATA.length)
					.map((item, index) => (
						<WeatherWeeklyItem
							key={item.day + 'id'}
							day={item.day}
							weather={item.weather}
							temperature={item.temperature}
						/>
					))}
			</StyledWeatherWeekly>
		</StyledWeatherContainer>
	)
}
