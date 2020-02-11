import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text } from '@storybook/addon-knobs'

import DayNightInfo from './index'

const MarginWrapper = styled.View`
  marginTop: 200
`

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)

stories.add('DayNightInfo', () => {

  const sunrise = text('Sunrise', '5:15')
  const sunset = text('Sunset', '17:42')

  return (
    <MarginWrapper>
      <DayNightInfo
        sunrise={sunrise}
        sunset={sunset}
      />
    </MarginWrapper>
  )
})