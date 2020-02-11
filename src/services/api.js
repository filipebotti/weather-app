import axios from 'axios'
const API_KEY = '4e225922a61d08ff659d3f5b6ae3b13f'

export async function getWeather({ lat, lon }) {
  try {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather/', {
      params: {
        lat,
        lon,
        lang: 'pt_br',
        units: 'metric',
        appid: API_KEY
      }
    })

    console.log(response.data)
    return response.data
  }catch(error) {
    console.log(error)
  }
}