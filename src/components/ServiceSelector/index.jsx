import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectService } from '@/store/selectors'
import { touchService } from '@/store/slices/serviceSlice'
import { StyledServiceSelector } from './styled'

export const ServiceSelector = () => {
	const dispatch = useDispatch()
	const { currentAPI } = useSelector(selectService)

	const handleService = event => {
		dispatch(touchService(event.target.value))
	}

	return (
		<StyledServiceSelector
			defaultValue={currentAPI}
			onChange={handleService}>
			<option key="OpenWeather" value="OpenWeather">
				OpenWeather
			</option>
			<option key="StormGlass" value="StormGlass">
				StormGlass
			</option>
		</StyledServiceSelector>
	)
}
