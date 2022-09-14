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

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	weatherState: weatherSliceReducer,
	serviceState: serviceSliceReducer,
	locationState: locationSliceReducer,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(
	persistConfig,
	rootReducer,
)

const sagaMiddleware = createSagaMiddleware()

const middleware = [
	...getDefaultMiddleware({
		thunk: false,
		serializableCheck: false,
	}),
	sagaMiddleware,
]

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleware,
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
