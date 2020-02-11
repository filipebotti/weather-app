import React from 'react'
import styled from 'styled-components'
import ShadowView from '../../UI/ShadowView'
import Text from '../../UI/Text'
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')


const Content = styled(ShadowView)`
  width: ${height * 0.38}
  height: ${height * 0.096}
  flexDirection: row
  borderRadius: 18
  paddingVertical: ${height * 0.02}
  position: absolute
  top: -40
  backgroundColor: ${props => props.theme.colors.backgroundColor}
`

const TempWrapper = styled.View`
  flex: 1
  alignItems: center
  justifyContent: space-between
`

const BorderedTempWrapper = styled(TempWrapper)`
  borderRightWidth: 0.5
  borderRightColor: #70707066
`

export default ({ min, max }) => {
  return (
    <Content>
      <BorderedTempWrapper>
        <Text>MIN</Text>
        <Text
          fontSize={20}
          lineHeight={24}
          letterSpacing={2.0}
          fontWeight={500}
        >
          {min}°
        </Text>
      </BorderedTempWrapper>
      <TempWrapper>
        <Text>MÁX</Text>
        <Text
          fontSize={20}
          lineHeight={24}
          letterSpacing={2.0}
          fontWeight={500}
        >
          {max}°
        </Text>
      </TempWrapper>
    </Content>
  )
}