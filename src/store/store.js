import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import currentWeatherSliceReducer from '@/store/slices/currentWeatherSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	currentWeatherSliceReducer,
})

const middleware = [
	...getDefaultMiddleware({
		thunk: false,
		serializableCheck: false,
	}),
	sagaMiddleware,
]

export const store = configureStore({
	reducer: rootReducer,
	middleware: middleware,
})

sagaMiddleware.run(rootSaga)
