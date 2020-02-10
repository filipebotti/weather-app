import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import light from '../../../utils/themes/light'
import Icon from './index'

const stories = storiesOf("ForecastIcon", module)
stories.addDecorator(withKnobs)

stories.add('Umidity', () => {
  
  const color = select('Color', light.colors, light.colors.primaryColor )
  
  return <Icon 
          name={'umidity'}
          color={color}
        />
})
stories.add('Winds', () => {
  
  const color = select('Color', light.colors, light.colors.primaryColor )
  
  return <Icon 
          name={'winds'}
          color={color}
        />
})

stories.add('Pressure', () => {
  
  const color = select('Color', light.colors, light.colors.primaryColor )
  
  return <Icon 
          name={'pressure'}
          color={color}
        />
})