import styled from 'styled-components'
import React from 'react'

export default styled.View.attrs(props => ({
  shadowOffset: props.shadowOffset || { width: 0, height: 3 }
}))`
  shadowColor: ${props => props.shadowColor || 'black' } 
  shadowOpacity: ${props => props.shadowOpacity || 0.1}
  shadowRadius: ${props => props.shadowRadius || 3 }
  backgroundColor: ${props => props.color || 'white'}
  width: ${props => props.width || 50}
  height: ${props => props.height || 50}
`