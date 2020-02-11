import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select, object, number } from '@storybook/addon-knobs'
import light from '../../../utils/themes/day'
import RoundedButton from './index'

const stories = storiesOf("Button", module)
stories.addDecorator(withKnobs)

stories.add('RoundedButton', () => {

  return <RoundedButton>
          
        </RoundedButton>
})