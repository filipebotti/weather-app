import React from 'react'
import styled, { withTheme } from 'styled-components'
import ShadowView from '../../UI/ShadowView'
import ShadowText from '../../UI/ShadowText'
import { View } from 'react-native'

import Cloudy from '../../../../assets/icons/006-cloudy-12.svg'

const Wrapper = styled(ShadowView)`
  width: 307
  height: 290
  backgroundColor: white
  alignItems: center
  justifyContent: space-between
  borderRadius: 40
  paddingBottom: 23.5
  paddingTop: 15.5
`

export default withTheme(({ temp, theme }) => {
  return (
    <Wrapper
      shadowRadius={6}
      shadowOpacity={0.16}
    >
      <Cloudy width={203.3} height={150.9} fill={theme.colors.primaryColor}/>
      <ShadowText
        fontSize={39}
        lineHeight={47}
        fontWeight={500}
      >
        {temp}C
      </ShadowText>
    </Wrapper>
  )
})