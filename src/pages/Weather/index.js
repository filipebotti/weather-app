import React from 'react'
import styled from 'styled-components'

import { Text, RoundedButton } from '../../components/UI'
import { ForecastCard, ForecastInfo, DayNightInfo } from '../../components/Weather'

import withLogic from './withLogic'

const Wrapper = styled.View`
  flex: 1
`
const WeatherWrapper = styled.View`
  flex: 1
  backgroundColor: ${props => props.theme.colors.primaryColor}  
  alignItems: center
  paddingTop: 25
  paddingBottom: 95.5
  justifyContent: space-between
`
const CityText = styled(Text)`
  color: ${props => props.theme.colors.backgroundColor}
  fontSize: 20
  lineHeight: 24
`

const RefreshButton = styled(RoundedButton)`
  position: absolute
  right: 20
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
    sunset,
    city,
    weatherIcon,
    onPressRefresh
  } = props

  return (
    <Wrapper>
      <WeatherWrapper>
        <CityText>{city}</CityText>
        <ForecastCard
          temp={temp}
          weatherIcon={weatherIcon}
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
      <RefreshButton
        onPress={onPressRefresh}
      />
    </Wrapper>
  )
}

export { WeatherPage } 
export default withLogic(WeatherPage)