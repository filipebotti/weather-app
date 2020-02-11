import React, { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as WeatherActions from '../../actions/weather'

export default Component => connect(mapStateToProps, mapDispatchToProps)(props => {


  
  useEffect(() => {    
    Geolocation.getCurrentPosition(
      (position) => {          
          props.requestWeather({ lat: position.coords.latitude, lon: position.coords.longitude })
      },
      (error) => {          
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  return <Component
          {...props.weather}
        />
})

const mapStateToProps = (state) => {
  const { weather } = state
  return { weather }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(WeatherActions, dispatch)
)