import React from 'react'
import styled from 'styled-components'
import withLogic from './withLogic'

import { Dimensions } from 'react-native'
import { Text, RoundedButton } from '../../components/UI'
import { ForecastCard, ForecastInfo, DayNightInfo } from '../../components/Weather'

const { height } = Dimensions.get('window')

const Wrapper = styled.View`
  flex: 1
`
const WeatherWrapper = styled.View`
  flex: 1
  backgroundColor: ${props => props.theme.colors.primaryColor}  
  alignItems: center
  paddingTop: ${height * 0.012}
  paddingBottom: ${height * 0.10}
  justifyContent: space-around
`
const CityText = styled(Text)`
  color: ${props => props.theme.colors.backgroundColor}
  fontSize: 20
  lineHeight: 24
  marginBottom: 15
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
      {height > 667 &&
        <DayNightInfo
          sunrise={sunrise}
          sunset={sunset}
        />
      }
      <RefreshButton
        onPress={onPressRefresh}
      />
    </Wrapper>
  )
}

export { WeatherPage } 
export default withLogic(WeatherPage)