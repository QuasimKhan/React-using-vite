import React from "react";
import { useWeather } from "../context/Weather";
import Clock from "./Date";

export const Card=() => {
    const weather = useWeather();



    return(
        <div className="card">
            <img src={weather.data ? weather.data.current.condition.icon : "Loading"} alt="" />
            <h2>{weather.data ? weather.data.current.temp_c: "Loading"} °C</h2>
            <h5>{weather.data ? weather.data.location.name : "Loading"}, {weather.data ? weather.data.location.region : "Loading"}, {weather.data ? weather.data.location.country : "Loading"}</h5>
        </div>
    )
}