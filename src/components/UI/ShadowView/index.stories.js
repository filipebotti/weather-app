import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, object, number } from '@storybook/addon-knobs'

import ShadowView from './index'

const stories = storiesOf("View", module)
stories.addDecorator(withKnobs)

stories.add('Shadow View', () => {

  const shadowOffset = object('Shadow Offset',  { width: 0, height: 3})
  const shadowColor = text('Shadow Color', 'black')
  const shadowOpacity = number('Shadow Opacity', 0.16)
  const shadowRadius = number('Shadow Radius', 6 )

  return <ShadowView 
          shadowOffset={shadowOffset}
          shadowColor={shadowColor}
          shadowOpacity={shadowOpacity}
          shadowRadius={shadowRadius}
        >
          
        </ShadowView>
})