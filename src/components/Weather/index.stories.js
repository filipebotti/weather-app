import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

import { WeatherPage } from '../../pages/Weather'

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)

stories.add('Page', () => {

  const temp = text('Temp', '25°')
  const pressure = number('Pressure', 87)
  const winds = number('Winds', 78)
  const windsDirection = select('Winds Direction', ['N','NE','NW','S','SW','SE','E', 'W'], 'N')
  const humidity = number('humidity', 87)
  const min = text('Min', '23°')
  const max = text('Max', '31°')
  const sunrise = text('Sunrise', '5:15')
  const sunset = text('Sunset', '17:42')

  return (
    <WeatherPage
      temp={temp}
      pressure={pressure}
      winds={winds}
      windsDirection={windsDirection}
      humidity={humidity}
      min={min}
      max={max}
      sunset={sunset}
      sunrise={sunrise}  
    />
  )
})