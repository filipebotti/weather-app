import React from 'react'
import { Dimensions, View } from 'react-native'
import styled from 'styled-components'

import MinMaxCard from '../MinMaxCard'
import ForecastInfoItem from './ForecastInfoItem'

const { width } = Dimensions.get('window')


const Wrapper = styled.View`
  width: ${width}
  height: 310
  alignItems: center
  backgroundColor: ${props => props.theme.colors.backgroundColor}
  paddingTop: 84
  paddingHorizontal: 38
`

const InfoWrapper = styled.View`
  flexDirection: row
  justifyContent: space-between
  width: 300
`

export default ({ humidity, winds, windsDirection, pressure, min, max }) => {
  return (       
    <Wrapper>
      <MinMaxCard
        min={min}
        max={max}
      />
      <InfoWrapper>
        <ForecastInfoItem
          label={'Umidade'}
          icon={'humidity'}
          value={humidity}
        />
        <ForecastInfoItem
          label={'Ventos'}
          icon={'winds'}
          value={winds}
        />
        <ForecastInfoItem
          label={'Pressão ATM'}
          icon={'pressure'}
          value={pressure}
        />
      </InfoWrapper>
    </Wrapper>    
  )
}