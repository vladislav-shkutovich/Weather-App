import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentCoords: null,
	currentLocation: '',
	// coordsIsFinded: false,
}

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		// findCoords(state) {
		// 	state.coordsIsFinded = false
		// },
		setCurrentCoords(state, action) {
			state.currentCoords = action.payload
			state.coordsIsFinded = true
		},
		setCurrentLocation(state, action) {
			state.currentLocation = action.payload
		},
	},
})

export default locationSlice.reducer
export const {
	// findCoords,
	setCurrentCoords,
	setCurrentLocation,
} = locationSlice.actions
