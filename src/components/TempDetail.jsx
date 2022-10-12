import React from 'react'
import TempImage from '../assets/sun_30.png'
import { UilRaindropsAlt, UilWind, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons'
import TemplateWeatherDetail from './TemplateWeatherDetail';
import { formatToLocalTime, iconUrlFromCode } from '../services/Context';

function TempDetail({ weather: {
    details, icon, temp, temp_max, temp_min, timezone, sunrise, sunset, speed, humidity
}, units, setUnits }) {

    const handleUnit = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }
    return (
        <div>
            <div className='flex flex-row items-center justify-center py-1 text-sm text-blue-100'>
                <p> {details}</p>
            </div>

            <div className='flex flex-row items-center justify-center text-white py-1'>
                <img className='
                w-26
                sm:w-36
                md:w-36
                lg:w-36
                xl:w-36
                2xl:w-36
                ' src={iconUrlFromCode(icon)} alt='temp_img' />
            </div>
            <div className='flex flex-row items-center justify-between py-1 text-white'>

                <TemplateWeatherDetail
                    title="Humidity"
                    icon=<UilRaindropsAlt />
                    detail={`${humidity.toFixed()} %`}
                />

                <p className='text-5xl font-semibold'>{temp.toFixed()}°</p>
                <TemplateWeatherDetail
                    title="Wind Speed"
                    icon=<UilWind />
                    detail={`${speed.toFixed()} km/h`}
                />

            </div>
            <div className="flex flex-row items-center justify-center">
                <button name="matric" className="text-xl text-white font-light transition ease-in hover:scale-110"
                    onClick={handleUnit}>
                    °C
                </button>
                <p name="matric" className="text-xl text-white mx-3">
                    |
                </p>
                <button name="matric" className="text-xl text-white font-light transition ease-in hover:scale-110"
                    onClick={handleUnit}>
                    °F
                </button>
            </div>

            <div className='
            flex flex-row items-center justify-between space-x-2 py-3 text-white
            sm:flex sm:flex-row sm:space-x-6 sm:justify-around
            md:flex md:flex-row md:space-x-6 md:justify-around
            lg:flex lg:flex-row lg:space-x-6 lg:justify-around
            xl:flex xl:flex-row xl:space-x-6 xl:justify-around
            2xl:flex 2xl:flex-row 2xl:space-x-6 2xl:justify-around
            '>
                <TemplateWeatherDetail
                    title="Sunrise"
                    icon=<UilSun />
                    detail={formatToLocalTime(sunrise, timezone, "hh:mm a")}
                />
                <p className='mx-3 text-3xl font-extralight'>|</p>
                <TemplateWeatherDetail
                    title="High"
                    icon=<UilArrowUp />
                    detail={`${temp_max.toFixed()}°`}
                />
                <p className='mx-3 text-3xl font-extralight'>|</p>
                <TemplateWeatherDetail
                    title="Low"
                    icon=<UilArrowDown />
                    detail={`${temp_min.toFixed()}°`}
                />
                <p className='mx-3 text-3xl font-extralight'>|</p>
                <TemplateWeatherDetail
                    title="Sunset"
                    icon=<UilSunset />
                    detail={formatToLocalTime(sunset, timezone, "hh:mm a")}
                />
            </div>

        </div>
    );
}

export default TempDetail