import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit'
import currentWeatherSliceReducer from '@/store/slices/currentWeatherSlice'

const rootReducer = combineReducers({
	currentWeatherSliceReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
