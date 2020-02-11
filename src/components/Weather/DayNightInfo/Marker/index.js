import React from 'react'
import styled from 'styled-components'

import { ForecastIcon, Text } from '../../../UI'

const Marker = styled.View`
  position: absolute  
  borderColor: white
  backgroundColor: white
  height: 45
  width: 10
  top: -35
  borderRadius: 10
  alignItems: center
`

const ContentWrapper = styled.View`
  width: 55
  height: 50
  alignItems: center
  justifyContent: space-between    
  top: -30
`

const TimeText = styled(Text)`
  color: #707070
  fontSize: 15
  lineHeight: 18
`

export default ({time, icon, iconColor, iconStrokeColor, ...props}) => {
  return (
    <Marker {...props}>    
      <ContentWrapper>
        <TimeText>{time}</TimeText>
        <ForecastIcon name={icon} color={iconColor} stroke={iconStrokeColor}/>
      </ContentWrapper>
    </Marker>
  )
}