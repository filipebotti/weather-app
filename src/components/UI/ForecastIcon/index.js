import React from 'react'
import styled from 'styled-components'

import Icons from './icons'

// const loadedIcons = {}
// loadedIcons.forEach(item => loadedIcons[item] = import(`../../../../assets/${item}.svg`))


export default ({ name, ...props }) => {

  const selectedIcon = Icons[name]
  const Icon = styled(selectedIcon.svg).attrs(props => ({
    fill: props.color || 'black',
    width: props.width || selectedIcon.width,
    height: props.height || selectedIcon.height,
    stroke: props.stroke || null
  }))``

  return <Icon {...props} />
}