import React from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { StyledMainPage } from './styled'

export const MainPage = () => {
	return (
		<MainLayout>
			<StyledMainPage>Weather App</StyledMainPage>
		</MainLayout>
	)
}
