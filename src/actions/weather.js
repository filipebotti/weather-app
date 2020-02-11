import * as Actions from './index'

export function requestWeather(payload) {
  return {
    type: Actions.REQUEST_WEATHER,
    payload
  }
}