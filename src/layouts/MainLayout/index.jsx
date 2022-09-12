import React from 'react'
import { useSelector } from 'react-redux'
import { selectService } from '@/store/selectors'
import { StyledMainLayout } from './styled'

export const MainLayout = ({ children }) => {
	const { currentAPI } = useSelector(selectService)
	return (
		<StyledMainLayout currentAPI={currentAPI}>
			{children}
		</StyledMainLayout>
	)
}
