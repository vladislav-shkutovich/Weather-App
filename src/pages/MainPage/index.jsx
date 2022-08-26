import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { StyledHeaderContainer } from './styled'
import { Clocks } from '@/components/Clocks'
import { Settings } from '@/components/Settings'
import { CitySelector } from '@/components/CitySelector'
import { CalendarContainer } from '@/components/CalendarContainer'
import { WeatherContainer } from '@/components/WeatherContainer'

export const MainPage = () => {
	return (
		<MainLayout>
			<StyledHeaderContainer>
				<Clocks />
				<Settings />
				<CitySelector />
			</StyledHeaderContainer>
			<CalendarContainer />
			<WeatherContainer />
		</MainLayout>
	)
}
