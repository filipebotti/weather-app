import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text } from '@storybook/addon-knobs'

import ForecastCard from './index'

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)

stories.add('ForecastCard', () => {

  const temp = text('Temp', '25°')

  return <ForecastCard
          temp={temp}
        />
})