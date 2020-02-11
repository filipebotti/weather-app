import { combineReducers } from 'redux'

import weather from './weather'
import theme from './theme'

export default combineReducers({
  weather,
  theme
})
