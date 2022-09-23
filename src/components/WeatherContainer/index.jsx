import React from 'react'
import { WeatherToday } from '@/components/WeatherToday'
import { WeatherWeeklyItem } from '@/components/WeatherWeeklyItem'
import { useWeatherData } from '@/hooks/useWeatherData'
import {
	StyledWeatherContainer,
	StyledWeatherWeekly,
} from './styled'

export const WeatherContainer = () => {
	const {
		weatherTodayData,
		weatherWeeklyData,
		currentAPI,
	} = useWeatherData()

	return (
		<StyledWeatherContainer>
			<WeatherToday
				weatherTodayData={weatherTodayData}
				currentAPI={currentAPI}
			/>
			<StyledWeatherWeekly>
				{weatherWeeklyData?.map((item, index) => (
					<WeatherWeeklyItem
						key={item.id}
						weatherWeeklyData={item}
						currentAPI={currentAPI}
					/>
				))}
			</StyledWeatherWeekly>
		</StyledWeatherContainer>
	)
}
