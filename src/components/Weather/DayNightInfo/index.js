import React from 'react'
import styled, { withTheme } from 'styled-components'
import Marker from './Marker'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')


const Wrapper = styled.View`  
  height: 16
  backgroundColor: ${props => props.theme.colors.backgroundColor}
`

const NightBar = styled.View`
  flex: 1
  backgroundColor: ${props => props.theme.colors.secondaryColor}
  borderTopRightRadius: 30
  borderTopLeftRadius: 30
`

const DayBar = styled.View`
  width: ${width - 200}
  height: 16
  backgroundColor: ${props => props.theme.colors.primaryColor}
  position: absolute
  zIndex: 100
  left: 90
`

const DayMarker = styled(Marker)`
  left: 85
  zIndex: 200
`
const NightMarker = styled(Marker)`
  left: 300
  zIndex: 200
`

export default withTheme(({ sunset, sunrise, theme }) => {
  return (
    <Wrapper>
      <DayBar/>
      <NightBar/>
      <DayMarker 
        time={sunrise}
        icon={'sun'}
        iconColor={theme.colors.primaryColor}
        iconStrokeColor={theme.colors.primaryColor}
      />
      <NightMarker 
        time={sunset}
        icon={'moon'}
        iconColor={theme.colors.secondaryColor}
      />
    </Wrapper>
  )
})