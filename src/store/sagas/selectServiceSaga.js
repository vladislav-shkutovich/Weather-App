import { put, takeEvery } from 'redux-saga/effects'
import { serviceSlice } from '@/store/slices/serviceSlice'

function* selectServiceWorker({ payload: apiName }) {
	yield put(serviceSlice.actions.setCurrentAPI(apiName))
}

export function* selectServiceWatcher() {
	yield takeEvery(
		'service/touchService',
		selectServiceWorker,
	)
}
