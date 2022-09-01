import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { StyledHeader } from './styled'
import { Clocks } from '@/components/Clocks'
import { ServiceSelector } from '@/components/ServiceSelector'
import { LoginButton } from '@/components/LoginButton'
import { CitySelector } from '@/components/CitySelector'
import { Calendar } from '@/components/Calendar'
import { WeatherContainer } from '@/components/WeatherContainer'

export const MainPage = () => {
	return (
		<MainLayout>
			<StyledHeader>
				<Clocks />
				<ServiceSelector />
				<LoginButton />
				<CitySelector />
			</StyledHeader>
			<Calendar />
			<WeatherContainer />
		</MainLayout>
	)
}
