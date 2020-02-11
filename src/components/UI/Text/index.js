import React from 'react'
import styled from 'styled-components'

export default styled.Text`
  fontFamily: ${props => props.theme.fonts.default};
  fontSize: ${props => props.fontSize || 12};
  lineHeight: ${props => props.lineHeight || 14};
  letterSpacing: ${props => props.letterSpacing || 1.2}
  color: ${props => props.color || props.theme.colors.primaryColor};
  fontWeight: ${props => props.fontWeight || 'normal'};
  textAlign: ${props => props.textAlign || 'left'}
`
