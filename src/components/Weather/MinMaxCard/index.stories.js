import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text } from '@storybook/addon-knobs'

import MinMaxCard from './index'

const MarginWrapper = styled.View`
  marginTop: 100
`

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)


stories.add('MinMaxCard', () => {

  const min = text('Min', '23°')
  const max = text('Max', '31°')

  return (
    <MarginWrapper>
      <MinMaxCard
        min={min}
        max={max}
      />
    </MarginWrapper>
  )
})