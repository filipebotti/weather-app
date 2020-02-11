import React from 'react'
import styled from 'styled-components'

import { ForecastCard, ForecastInfo } from '../../components/Weather'

const Wrapper = styled.View`
  flex: 1
`
const WeatherWrapper = styled.View`
  flex: 1
  backgroundColor: ${props => props.theme.colors.primaryColor}
`

const WeatherPage = ({ temp }) => {
  return (
    <Wrapper>
      <WeatherWrapper>
        <ForecastCard
          temp={temp}
        />
      </WeatherWrapper>
    </Wrapper>
  )
}

export { WeatherPage } 