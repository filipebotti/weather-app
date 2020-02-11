import { takeLatest, put, call } from 'redux-saga/effects'
import * as Types from '../../actions'

import { getWeather } from '../../services/api'
import { windDegreeToDirection } from '../../utils'
import moment from '../../utils/moment'

function* requestWeather({ payload }) {
  try {
    const { main, wind, sys, name, timezone } = yield call(getWeather, payload)
    const data = {
      temp: main.temp.toLocaleString('pt-BR'),
      min: main.temp_min.toLocaleString('pt-BR'),
      max: main.temp_max.toLocaleString('pt-BR'),
      pressure: main.pressure,
      humidity: main.humidity.toLocaleString('pt-BR'),
      sunrise: moment.unix(sys.sunrise).utcOffset(timezone/ 60).format('HH:mm'),
      sunset: moment.unix(sys.sunset).utcOffset(timezone / 60).format('HH:mm'),
      winds: wind.speed.toLocaleString('pt-BR'),
      windsDirection: windDegreeToDirection(wind.deg),
      city: name
    }
    yield put({ type: Types.REQUEST_WEATHER_SUCCESS, data })
  } catch(e) {
    console.log(e)
    // yield put(Types.REQUEST_WEATHER_ERROR, { error: 'Somenthing wrong happened.' })
  }
}

function* weatherSaga() {
  yield takeLatest(Types.REQUEST_WEATHER, requestWeather)
}

export default weatherSaga