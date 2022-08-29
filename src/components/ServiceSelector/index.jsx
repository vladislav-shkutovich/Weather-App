import React from 'react'
import { StyledServiceSelector } from './styled'

export const ServiceSelector = () => {
	return (
		<StyledServiceSelector defaultValue="Service #1">
			<option key="option 1" value="Service #1">
				Service #1
			</option>
			<option key="option 2" value="Service #2">
				Service #2
			</option>
		</StyledServiceSelector>
	)
}
