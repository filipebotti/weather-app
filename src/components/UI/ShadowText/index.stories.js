import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select, object, number } from '@storybook/addon-knobs'
import light from '../../../utils/themes/light'
import ShadowText from './index'

const stories = storiesOf("Shadow Text", module)
stories.addDecorator(withKnobs)

stories.add('Regular', () => {
  const fontSize = number('Font Size', 12)
  const lineHeight = number('Line Height', 14)
  const letterSpacing = number('Letter Spacing', 1.2)
  const color = select('Color', light.colors, light.colors.primaryColor )
  const textValue = text('Text', 'Text')

  const shadowOffset = object('Shadow Offset',  { width: 0, height: 3})
  const shadowColor = text('Shadow Color', 'black')
  const shadowOpacity = number('Shadow Opacity', 0.16)
  const shadowRadius = number('Shadow Radius', 6 )

  return <ShadowText 
          fontSize={fontSize}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
          color={color}
          shadowOffset={shadowOffset}
          shadowColor={shadowColor}
          shadowOpacity={shadowOpacity}
          shadowRadius={shadowRadius}
        >
          {textValue}
        </ShadowText>
})

stories.add('Medium', () => {
  const fontSize = number('Font Size', 12)
  const lineHeight = number('Line Height', 14)
  const letterSpacing = number('Letter Spacing', 1.2)
  const color = select('Color', light.colors, light.colors.primaryColor )
  const textValue = text('Text', 'Text')

  const shadowOffset = object('Shadow Offset',  { width: 0, height: 3})
  const shadowColor = text('Shadow Color', 'black')
  const shadowOpacity = number('Shadow Opacity', 0.16)
  const shadowRadius = number('Shadow Radius', 6 )
  return <ShadowText 
          fontSize={fontSize}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
          color={color}
          fontWeight={500}
          shadowOffset={shadowOffset}
          shadowColor={shadowColor}
          shadowOpacity={shadowOpacity}
          shadowRadius={shadowRadius}
        >
          {textValue}
        </ShadowText>
})