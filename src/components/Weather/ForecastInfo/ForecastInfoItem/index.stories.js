import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, number, select, text } from '@storybook/addon-knobs'

import ForecastInfoItem from './index'

const stories = storiesOf("Weather", module)
stories.addDecorator(withKnobs)


stories.add('ForecastInfoItem', () => {

  const icon = select('Icon', ['humidity','winds', 'pressure'], 'humidity')
  const label = text('Label', 'Umidade')
  const value = number('Value', 87)
  const aditionalInfo = text('Aditional Info', '')

  return <ForecastInfoItem
            icon={icon}
            label={label}
            value={value}
            aditionalInfo={aditionalInfo}
          />      
})