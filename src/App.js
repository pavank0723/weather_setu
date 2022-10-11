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
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return 'from-blue-500 to-cyan-400'
    const threshold = units === "metric" ? 20 : 60
    if (weather.temp <= threshold) return "from-blue-500 to-cyan-400"

    return "from-orange-500 to-yellow-400"
  }

  return (
  <div className={`mx-auto rounded-md max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-300 ${formatBackground()}`}>
    <TopButtons setQuery={setQuery} />
    <InputButton setQuery={setQuery} units={units} setUnits={setUnits} />

    {weather && (
      <div>
        <TimeAndLocation weather={weather} />
        <TempDetail weather={weather} units={units} setUnits={setUnits} />
        <Forecast title='Today Forecast' items={weather.hourly} />
        <Forecast title='Daily Forecast' items={weather.daily} />
      </div>
    )}

  </div>
  )
}

export default App;
