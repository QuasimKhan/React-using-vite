const baseURL = "https://api.weatherapi.com/v1/current.json?key=96e8630f31d94b478df202229242203"
export const getWeather = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
  }; 
export const getWeatherForLocation = async (lat,log) => {
    const response = await fetch(`${baseURL}&q=${lat},${log}&aqi=yes`);
    return await response.json();
  }; 