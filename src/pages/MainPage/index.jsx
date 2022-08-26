import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { StyledHeader } from './styled'
import { Clocks } from '@/components/Clocks'
import { Settings } from '@/components/Settings'
import { CitySelector } from '@/components/CitySelector'
import { CalendarContainer } from '@/components/CalendarContainer'
import { WeatherContainer } from '@/components/WeatherContainer'

export const MainPage = () => {
	return (
		<MainLayout>
			<StyledHeader>
				<Clocks />
				<Settings />
				<CitySelector />
			</StyledHeader>
			<CalendarContainer />
			<WeatherContainer />
		</MainLayout>
	)
}
