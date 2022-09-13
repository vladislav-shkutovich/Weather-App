import React from 'react'
import {
	StyledFrom,
	StyledInput,
	StyledSearchButton,
} from './styled'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectLocation } from '@/store/selectors'
import { setCurrentLocation } from '@/store/slices/locationSlice'
import { fetchWeather } from '@/store/slices/weatherSlice'

export const CitySelector = () => {
	const dispatch = useDispatch()
	const currentLocation = useSelector(selectLocation)

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
				placeholder="Choose City"
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
