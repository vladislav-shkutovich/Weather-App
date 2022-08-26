import React from 'react'
import GlobalStyles from '@/globalStyles'
import { MainPage } from '@/pages/MainPage'

export const App = () => {
	return (
		<React.Fragment>
			<MainPage />
			<GlobalStyles />
		</React.Fragment>
	)
}
