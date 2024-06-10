import { Card } from './components/Card';
import { Input } from './components/Input';
import { Button } from './components/Button';
import './App.css';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';
import Clock from './components/Date';

function App() {
  const weather = useWeather();
  console.log("weather", weather.data);

  useEffect(() => {
    weather.fetchUserCurrentLocation();
  }, []);
 
  return (
    <>
      <Clock/>
      <h1>Weather Forecast App</h1>

      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card  />
      <Button onClick={weather.searchCity ? weather.fetchData : weather.fetchUserCurrentLocation} value="Refresh" />
    </>
  );
}

export default App;
