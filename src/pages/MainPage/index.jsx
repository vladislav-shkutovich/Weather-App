import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { StyledHeaderContainer } from './styled'
import { Clocks } from '@/components/Clocks'
import { ServiceSelector } from '@/components/ServiceSelector'
import { LoginButton } from '@/components/LoginButton'
import { CitySelector } from '@/components/CitySelector'
import { CalendarContainer } from '@/components/CalendarContainer'
import { WeatherContainer } from '@/components/WeatherContainer'

export const MainPage = () => {
	return (
		<MainLayout>
			<StyledHeaderContainer>
				<Clocks />
				<ServiceSelector />
				<LoginButton />
				<CitySelector />
			</StyledHeaderContainer>
			<CalendarContainer />
			<WeatherContainer />
		</MainLayout>
	)
}
