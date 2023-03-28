import React ,{createContext, useContext, useEffect , useState}from 'react'
import axios from "axios";
const WeatherContext = createContext();

export const WeatherProvider = ({children})=>{
    const [city,setCity]= useState("Adana")
    const [weather,setWeather]=useState()

    useEffect(() => {
        const apiKey = "b38d9cfb358e9bfc3e237fb9346d9374"
        const baseURL =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${apiKey}&cnt=40` 
        if (city) {
        axios(baseURL)
        .then(res => {
            const dailyWeatherData = res.data.list.filter((data, index) => index % 8 === 0);
            setWeather(dailyWeatherData);
          })
          .catch((e) => alert("Please Enter valid City Name"))
        
    }
    },[city])

    const values ={city,setCity,weather,setWeather}
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = ()=> useContext(WeatherContext)
