import React from 'react'
import styled, { withTheme } from 'styled-components'
import ShadowView from '../../UI/ShadowView'
import { Text, ForecastIcon } from '../../UI'
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')


const Wrapper = styled(ShadowView)`
  width: ${height * 0.38}
  height: ${height * 0.35}
  backgroundColor: ${props => props.theme.colors.backgroundColor}
  alignItems: center
  justifyContent: space-between
  borderRadius: 40
  paddingBottom: 23.5
  paddingTop: 15.5
`

export default withTheme(({ temp, weatherIcon = '01d', theme }) => {

  const iconWidth = height * 0.25
  const iconHeight = height * 0.185

  return (
    <Wrapper
      shadowRadius={6}
      shadowOpacity={0.16}
    >
      <ForecastIcon 
        name={weatherIcon} 
        color={theme.colors.primaryColor}
        width={iconWidth}
        height={iconHeight}  
      />      
      <Text
        fontSize={39}
        lineHeight={47}
        fontWeight={500}
      >
        {temp}°C
      </Text>
    </Wrapper>
  )
})