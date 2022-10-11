import React from 'react'
import TempImage from '../assets/sun_30.png'
import { UilRaindropsAlt, UilWind, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons'
import TemplateWeatherDetail from './TemplateWeatherDetail';

function TempDetail() {
    return (
        <div>
            <div className='flex flex-row items-center justify-center py-1 text-sm text-blue-100'>
                <p> Cloud Rainy</p>
            </div>

            <div className='flex flex-row items-center justify-center text-white py-1'>
                <img className='w-36' src={TempImage} alt='temp_img' />
            </div>
            <div className='flex flex-row items-center justify-between py-1 text-white'>

                <TemplateWeatherDetail
                    title="Humidity"
                    icon=<UilRaindropsAlt />
                    detail="43% - 50%"
                />

                <p className='text-5xl font-semibold'>34°</p>
                <TemplateWeatherDetail
                    title="Wind Speed"
                    icon=<UilWind />
                    detail="3 km/h"
                />

            </div>
            <div className="flex flex-row items-center justify-center">
                <button name="matric" className="text-xl text-white font-light">
                    °C
                </button>
                <p name="matric" className="text-xl text-white mx-3">
                    |
                </p>
                <button name="imperial" className="text-xl text-white font-light">
                    °F
                </button>
            </div>

            <div className='flex flex-row items-center justify-around space-x-6 py-3 text-white'>
                <TemplateWeatherDetail
                    title="Sunrise"
                    icon=<UilSun />
                    detail="04 : 30 AM"
                />
                <p className='mx-3 text-3xl font-extralight'>|</p>
                <TemplateWeatherDetail
                    title="High"
                    icon=<UilArrowUp />
                    detail="30°"
                />
                <p className='mx-3 text-3xl font-extralight'>|</p>
                <TemplateWeatherDetail
                    title="Low"
                    icon=<UilArrowDown />
                    detail="18°"
                />
                <p className='mx-3 text-3xl font-extralight'>|</p>
                <TemplateWeatherDetail
                    title="Sunset"
                    icon=<UilSunset />
                    detail="06 : 49 PM"
                />
            </div>

        </div>
    );
}

export default TempDetail