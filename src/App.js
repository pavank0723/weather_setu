import './App.css';
import TopButtons from './components/TopButtons';
import InputButton from './components/InputButton';
import TimeAndLocation from './components/TimeAndLocation';
import TempDetail from './components/TempDetail';
import Forecast from './components/Forecast';
import { getFormattedWeatherData } from './services/Context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [query, setQuery] = useState({ q: 'mumbai' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
      })

    }
    fetchWeather()
  }, [query, units])

  return <div className='mx-auto rounded-md max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl shadow-gray-300'>
    <TopButtons />
    <InputButton />

    {weather && (
      <div>
        <TimeAndLocation weather= {weather}/>
        <TempDetail weather= {weather}/>
        <Forecast title='Today Forecast' items={weather.hourly}/>
        <Forecast title='Daily Forecast' items={weather.daily}/>
      </div>
    )}

  </div>
}

export default App;
