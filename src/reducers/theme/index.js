import * as Types from '../../actions'

const INITIAL_STATE = {
  selectedTheme: 'day'
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.REQUEST_WEATHER_SUCCESS:      
      if(action.data.weatherIcon.includes('d'))
        return { ...state, selectedTheme: 'day'}
      else
        return { ...state, selectedTheme: 'night'}
    default: 
      return state
  }
}

export default weatherReducer