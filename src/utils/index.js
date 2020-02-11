export function windDegreeToDirection(degree) {
  if((degree >= 0  && degree <= 23) || (degree >= 337 && degree <= 360))
    return 'N'
  else if(degree >= 24 && degree <= 68)
    return 'NE'
  else if(degree >= 69 && degree <= 113)
    return 'E'
  else if(degree >= 114 && degree <= 158)
    return 'SE'
  else if(degree >= 159 && degree <= 203)
    return 'S'
  else if(degree >= 204 && degree <= 248)
    return 'SW'
  else if(degree >= 249 && degree <= 293)
    return 'W'
  else 
    return 'NW'
}