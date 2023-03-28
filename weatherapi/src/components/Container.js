import React from 'react'
import { WeatherProvider } from '../context/WeatherContext'
import CardWeather from './CardWeather'
import CitySelect from './CitySelect'
import Footer from './Footer'
import Header from './Header'

function Container() {
  return (
   <WeatherProvider>
        <Header/>
        <CitySelect/>
        <CardWeather/>
        <Footer/>
   </WeatherProvider>
  )
}

export default Container
