import React from 'react'
import styled from 'styled-components'

import humidity from '../../../../assets/icons/humidity.svg'
import Winds from '../../../../assets/icons/winds.svg'
import Pressure from '../../../../assets/icons/pressure.svg'

const icons = {
  humidity: {
    svg: humidity,
    width: 16.09,
    height: 13.49
  },
  winds: {
    svg: Winds,
    width: 29.47,
    height: 22.85
  },
  pressure: {
    svg: Pressure,
    width: 25.01,
    height: 22.95
  }
}
// const loadedIcons = {}
// loadedIcons.forEach(item => loadedIcons[item] = import(`../../../../assets/${item}.svg`))


export default ({ name, ...props }) => {

  const selectedIcon = icons[name]
  const Icon = styled(selectedIcon.svg).attrs(props => ({
    fill: props.color || 'black',
    width: props.width || selectedIcon.width,
    height: props.height || selectedIcon.height
  }))``

  return <Icon {...props} />
}