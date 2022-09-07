import React from 'react'
import { useFormik } from 'formik'
import {
	StyledFrom,
	StyledInput,
	StyledSearchButton,
	StyledCountryName,
} from './styled'

export const CitySelector = () => {
	// ! Временно, пока нет рендера по условиям
	const temporalyInputCondition = false
	// const temporalyInputCondition = true

	const formik = useFormik({
		initialValues: {
			input: 'Current City',
		},
		onSubmit: (values, { resetForm }) => {
			resetForm({ input: '' })
		},
	})

	return (
		<StyledFrom
			onSubmit={formik.handleSubmit}
			autoComplete="off">
			<StyledInput
				id="input"
				name="input"
				placeholder="City"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.input}
			/>
			{temporalyInputCondition ? (
				<StyledSearchButton type="submit">
					Search
				</StyledSearchButton>
			) : (
				<StyledCountryName>
					Current Country
				</StyledCountryName>
			)}
		</StyledFrom>
	)
}
