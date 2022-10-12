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
  <div className={`
  rounded-md max-w-screen-md m-4 py-5 px-4 mx-4 bg-gradient-to-br h-fit sm:shadow-xl shadow-gray-300 ${formatBackground()}
  sm:w-auto sm:mx-4 sm:max-w-screen-lg py-5 sm:px-10 sm:bg-gradient-to-br sm:h-fit sm:shadow-xl sm:shadow-gray-300 
  md:mx-auto md:rounded-md md:max-w-screen-md md:m-5 md:py-5 md:px-32 md:bg-gradient-to-br md:h-fit shadow-xlmd: md:shadow-gray-300
  lg:mx-auto lg:rounded-md lg:max-w-screen-md lg:m-4 lg:py-5 lg:px-32 lg:bg-gradient-to-br lg:h-fit shadow-xlmd: lg:shadow-gray-300 
  xl:mx-auto xl:rounded-md xl:max-w-screen-md xl:m-4 xl:py-5 xl:px-32 xl:bg-gradient-to-br xl:h-fit shadow-xlmd: xl:shadow-gray-300 
  2xl:mx-auto 2xl:rounded-md 2xl:max-w-screen-md 2xl:m-4 2xl:py-5 2xl:px-32 2xl:bg-gradient-to-br 2xl:h-fit shadow-xlmd: 2xl:shadow-gray-300   
  `}>
  <div className='flex flex-col object-cover'>
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

  </div>
  )
}

export default App;
