import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, number, select, text } from '@storybook/addon-knobs'

import ForecastInfo from './index'

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)

const MarginWrapper = styled.View`
  paddingTop: 100
`

stories.add('ForecastInfo', () => {

  const pressure = number('Pressure', 87)
  const winds = number('Winds', 78)
  const windsDirection = select('Winds Direction', ['N','NE','NW','S','SW','SE','E', 'W'], 'N')
  const humidity = number('humidity', 87)
  const min = text('Min', '23°')
  const max = text('Max', '31°')

  return (
    <MarginWrapper>
      <ForecastInfo
        pressure={pressure}
        winds={winds}
        windsDirection={windsDirection}
        humidity={humidity}
        min={min}
        max={max}          
      />
    </MarginWrapper>
  )
})