import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
	StyledFrom,
	StyledInput,
	StyledSearchButton,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectLocation } from '@/store/selectors'
import { setCurrentLocation } from '@/store/slices/locationSlice'
import { fetchWeather } from '@/store/slices/weatherSlice'

export const CitySelector = () => {
	const currentLocation = useSelector(selectLocation)
	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			input: currentLocation,
		},
		enableReinitialize: true,
		onSubmit: (values, { resetForm }) => {
			dispatch(setCurrentLocation(values.input))
			dispatch(fetchWeather(currentLocation))
		},
	})

	return (
		<StyledFrom
			onSubmit={formik.handleSubmit}
			autoComplete="off">
			<StyledInput
				id="input"
				name="input"
				placeholder="Enter City"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.input}
			/>
			<StyledSearchButton type="submit">
				Search
			</StyledSearchButton>
		</StyledFrom>
	)
}
