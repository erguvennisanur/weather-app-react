import { useWeather } from '../context/WeatherContext'

function CardWeather() {
    
    const {weather} = useWeather();

   const values ={
        daysOfWeek:"long",
        year :"numeric",
        monthOfYear: "long",
        day :"numeric"
   }

  return (
    <div  className='CardWeather-container'>
      {weather &&
        weather.map((day) => (
          <div key={day.dt} className={`weather-card ${new Date().getDate() === new Date(day.dt * 1000).getDate() ? "is-today" : ""}`} >
            <div className='selected-city'> {day.city} </div>
            <div className="date">{new Date(day.dt * 1000).toLocaleDateString("en-En", values)}</div>
            <div className="temp">
              {Math.round(day.main.temp)} <span>°C</span>
            </div>
            <div className="description">
              {day.weather[0].description.toUpperCase()}
            </div>
            <div className="image">
              <img
                className="icon"
                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                alt="weather icon"
              />
            </div>
          </div>
        ))}

    </div>
  )
}

export default CardWeather
