import * as Actions from './index'

export function requestWeather(payload) {
  console.log(payload)
  return {
    type: Actions.REQUEST_WEATHER,
    payload
  }
}