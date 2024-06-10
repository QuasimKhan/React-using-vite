import { useState, createContext, useContext } from "react";
import { getWeather , getWeatherForLocation} from "../api/Index";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);


    const fetchData = async () => {
        const response = await getWeather(searchCity);
        setData(response);
    }

    const fetchUserCurrentLocation = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherForLocation(position.coords.latitude, position.coords.longitude)
                .then((data) => {
                    setData(data);
                })
        })
    }

    return (
        <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData, fetchUserCurrentLocation}}>
            {props.children}
        </WeatherContext.Provider>
    );
}
