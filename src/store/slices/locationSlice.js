import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentCoords: null,
	currentLocation: '',
}

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setCurrentCoords(state, action) {
			state.currentCoords = action.payload
		},
		setCurrentLocation(state, action) {
			state.currentLocation = action.payload
		},
	},
})

export default locationSlice.reducer
export const {
	setCurrentCoords,
	setCurrentLocation,
} = locationSlice.actions
