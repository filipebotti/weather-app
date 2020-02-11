import React from 'react'

export default Component => props => {
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