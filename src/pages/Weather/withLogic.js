import React, { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';

export default Component => props => {

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
          console.log(position);
      },
      (error) => {          
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  return <Component
          temp={'25°'}
          min={'21°'}
          max={'31°'}
          humidity={87}
          winds={78}
          windsDirection={'N'}
          pressure={87}
          sunrise={'5:14'}
          sunset={'17:45'}
        />
}