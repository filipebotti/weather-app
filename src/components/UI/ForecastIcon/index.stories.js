import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import day from '../../../utils/themes/day'
import Icon from './index'

const stories = storiesOf("ForecastIcon", module)
stories.addDecorator(withKnobs)

stories.add('humidity', () => {
  
  const color = select('Color', day.colors, day.colors.primaryColor )
  
  return <Icon 
          name={'humidity'}
          color={color}
        />
})
stories.add('Winds', () => {
  
  const color = select('Color', day.colors, day.colors.primaryColor )
  
  return <Icon 
          name={'winds'}
          color={color}
        />
})

stories.add('Pressure', () => {
  
  const color = select('Color', day.colors, day.colors.primaryColor )
  
  return <Icon 
          name={'pressure'}
          color={color}
        />
})