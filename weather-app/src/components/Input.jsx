import { useWeather } from "../context/Weather"


export const Input = () => {
    const weather = useWeather()  ;  
    return (
        <input 
        className="input-box"
        placeholder="Enter City Name"
        value={weather.searchCity} 
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        />
    )
}