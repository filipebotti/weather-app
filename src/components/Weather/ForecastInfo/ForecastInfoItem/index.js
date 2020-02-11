import React from 'react'
import { View } from 'react-native'
import styled, { withTheme } from 'styled-components'

import { Text, ForecastIcon } from '../../../UI'

const Wrapper = styled.View`
  alignItems: center
  width: 78  
`
const CenteredView = styled.View`
  alignItems: center
  justifyContent: center
`

const IconWrapper = styled(CenteredView)`
  height: 22.9  
`

const LabelWrapper = styled(CenteredView)`
  height: 53
`
const AditionalInfoText = styled(Text)`
  marginTop: 10
  fontSize: 10
  lineHeight: 12
  letterSpacing: 1.0
  fontWeight: 500
`

export default withTheme(({ label, icon, value, theme, aditionalInfo }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <ForecastIcon 
          name={icon}
          color={theme.colors.primaryColor}
        />
      </IconWrapper>
      <LabelWrapper>
        <Text
          textAlign={'center'}
        >
          {label.toUpperCase()}
        </Text>
      </LabelWrapper>
      <Text
        fontSize={20}
        lineHeight={24}
        letterSpacing={2.0}
        fontWeight={500}
      >
        {value}
      </Text>
      {aditionalInfo != '' && <AditionalInfoText>{aditionalInfo}</AditionalInfoText>}
    </Wrapper>
  )
})