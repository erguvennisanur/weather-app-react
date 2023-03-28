import React, {useState,useEffect} from 'react'
import { useWeather } from '../context/WeatherContext'
import axios from 'axios'

const cities_url = 'https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json';

function CitySelect() {

    const {setCity} = useWeather();
    const [cities,setCities]= useState([]);
    const [citySelect,setCitySelect] = useState([]);

    useEffect(() => {
        axios.get(cities_url)
        .then(response => {
            const cities = response.data;
            setCities(cities); 
          })
          .catch(error => {
            console.error(error);
          });
    }, []);

    const handleSelect = (e) => {
        setCitySelect(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(citySelect);
        setCity(citySelect);
        setCitySelect();
      };
    


  return (
    <div>
         <form onSubmit={handleSubmit} className="form">
        <select value={citySelect} onChange={handleSelect}>
          <option value="">Please Select Your City</option>
          {cities.map(city => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default CitySelect
