import React from 'react'
import styled from 'styled-components'

import { Text } from '../../components/UI'
import { ForecastCard, ForecastInfo, DayNightInfo } from '../../components/Weather'

const Wrapper = styled.View`
  flex: 1
`
const WeatherWrapper = styled.View`
  flex: 1
  backgroundColor: ${props => props.theme.colors.primaryColor}  
  alignItems: center
  paddingTop: 15
  paddingBottom: 95.5
  justifyContent: space-between
`
const CityText = styled(Text)`
  color: ${props => props.theme.colors.backgroundColor}
  fontSize: 20
  lineHeight: 24
`

const WeatherPage = (props) => {

  const {
    temp,
    pressure,
    winds,
    windsDirection,
    humidity,
    min,
    max,
    sunrise,
    sunset
  } = props

  return (
    <Wrapper>
      <WeatherWrapper>
        <CityText>Fortaleza, CE</CityText>
        <ForecastCard
          temp={temp}
        />
      </WeatherWrapper>
      <ForecastInfo
        pressure={pressure}
        winds={winds}
        windsDirection={windsDirection}
        humidity={humidity}
        min={min}
        max={max}      
      />
      <DayNightInfo
        sunrise={sunrise}
        sunset={sunset}
      />
    </Wrapper>
  )
}

export { WeatherPage } 