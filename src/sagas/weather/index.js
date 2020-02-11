import { takeLatest, put } from 'redux-saga/effects'
import * as Types from '../../actions'

function* requestWeather({ payload }) {
  try {

    yield put(Types.REQUEST_WEATHER_SUCCESS, { })
  } catch(e) {
    // yield put(Types.REQUEST_WEATHER_ERROR, { error: 'Somenthing wrong happened.' })
  }
}

function* weatherSaga() {
  yield takeLatest(Types.REQUEST_WEATHER, requestWeather)
}

export default weatherSaga