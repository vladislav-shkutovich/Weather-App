import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import weatherSliceReducer from '@/store/slices/weatherSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	weatherSliceReducer,
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
