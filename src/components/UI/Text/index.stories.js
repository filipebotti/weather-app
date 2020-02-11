import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import light from '../../../utils/themes/day'
import Text from './index'

const stories = storiesOf("Text", module)
stories.addDecorator(withKnobs)

stories.add('Regular', () => {
  const fontSize = number('Font Size', 12)
  const lineHeight = number('Line Height', 14)
  const letterSpacing = number('Letter Spacing', 1.2)
  const color = select('Color', light.colors, light.colors.primaryColor )
  const textValue = text('Text', 'Text')
  return <Text 
          fontSize={fontSize}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
          color={color}
        >
          {textValue}
        </Text>
})

stories.add('Medium', () => {
  const fontSize = number('Font Size', 12)
  const lineHeight = number('Line Height', 14)
  const letterSpacing = number('Letter Spacing', 1.2)
  const color = select('Color', light.colors, light.colors.primaryColor )
  const textValue = text('Text', 'Text')
  return <Text 
          fontSize={fontSize}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
          color={color}
          fontWeight={500}
        >
          {textValue}
        </Text>
})