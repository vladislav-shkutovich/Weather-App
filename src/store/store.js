import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import weatherSliceReducer from '@/store/slices/weatherSlice'
import serviceSliceReducer from '@/store/slices/serviceSlice'
import locationSliceReducer from '@/store/slices/locationSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	weatherState: weatherSliceReducer,
	serviceState: serviceSliceReducer,
	locationState: locationSliceReducer,
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
