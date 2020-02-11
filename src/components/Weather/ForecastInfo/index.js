import React from 'react'
import { Dimensions, View } from 'react-native'
import styled from 'styled-components'

import MinMaxCard from '../MinMaxCard'
import ForecastInfoItem from './ForecastInfoItem'

const { height } = Dimensions.get('window')


const Wrapper = styled.View`
  height: ${height * 0.38}
  alignItems: center
  backgroundColor: ${props => props.theme.colors.backgroundColor}
  paddingTop: ${height * 0.11}
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
          unit={'%'}
        />
        <ForecastInfoItem
          label={'Ventos'}
          icon={'winds'}
          value={winds}
          unit={'m/s'}
          aditionalInfo={windsDirection}
        />
        <ForecastInfoItem
          label={'Pressão ATM'}
          icon={'pressure'}
          unit={'hpa'}
          value={pressure}
        />
      </InfoWrapper>
    </Wrapper>    
  )
}