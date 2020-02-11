import * as Types from '../../actions'

const INITIAL_STATE = {
  temp: 0,
  min: 0,
  max: 0,
  pressure: 0,
  humidity: 0,
  sunrise: '00:00',
  sunset: '23:59',
  winds: 0,
  windsDirection: 'N',
  city: '',
  weatherIcon: '01d'
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.REQUEST_WEATHER_SUCCESS:
      return { ...state, ...action.data}
    default: 
      return state
  }
}

export default weatherReducer