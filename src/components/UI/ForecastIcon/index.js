import React from 'react'
import styled from 'styled-components'

import Umidity from '../../../../assets/icons/umidity.svg'
import Winds from '../../../../assets/icons/winds.svg'
import Pressure from '../../../../assets/icons/pressure.svg'

const icons = {
  umidity: Umidity,
  winds: Winds,
  pressure: Pressure
}
// const loadedIcons = {}
// loadedIcons.forEach(item => loadedIcons[item] = import(`../../../../assets/${item}.svg`))


export default ({ name, ...props }) => {

  const Icon = styled(icons[name]).attrs(props => ({
    fill: props.color || 'black',
    width: props.width || 50,
    height: props.height || 50
  }))``

  return <Icon {...props} />
}