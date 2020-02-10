import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, object, number } from '@storybook/addon-knobs'

import MinMaxCard from './index'

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)

stories.add('Shadow View', () => {

  const min = text('Min', '23°')
  const max = text('Max', '31°')

  return <MinMaxCard
          min={min}
          max={max}
        />
})