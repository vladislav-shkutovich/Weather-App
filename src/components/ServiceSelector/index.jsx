import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectService } from '@/store/selectors'
import { touchService } from '@/store/slices/serviceSlice'
import { servicesNames } from '@/constants'
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
			{servicesNames.map(name => (
				<option key={'service_' + name} value={name}>
					{name}
				</option>
			))}
		</StyledServiceSelector>
	)
}
