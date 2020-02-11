import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

import Refresh from '../../../../assets/icons/refresh.svg'

import ShadowView from '../ShadowView'

const Wrapper = styled(ShadowView)`
  backgroundColor: ${props => props.theme.colors.backgroundColor}
  borderRadius: 30
  alignItems: center
  justifyContent: center
`
const RefreshIcon = styled(Refresh).attrs(props => ({
  fill: props.theme.colors.primaryColor
}))``

export default ({ onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Wrapper>
        <RefreshIcon width={25} height={25}/>
      </Wrapper>
    </TouchableOpacity>
  )
}