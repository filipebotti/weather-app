import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

export default styled(Text).attrs(props => ({
  shadowOffset: props.shadowOffset || { width: 0, height: 3}
}))`
  shadowColor: ${props => props.shadowColor || 'black'}
  shadowOpacity: ${props => props.shadowOpacity || 0.16}
  shadowRadius: ${props => props.shadowRadius || 6 }
  width: ${props => props.width || 50}
  height: ${props => props.height || 50}
`