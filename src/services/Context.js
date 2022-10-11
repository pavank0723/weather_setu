// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

import { DateTime } from "luxon"

const BASE_URL = "https://api.openweathermap.org/data/2.5"
// const API_ID = process.env.REACT_APP_WEATHER_API_KEY
const API_ID = "b555a61e5b51a4ce94bdeed8a779f9d4"


export const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_ID })

    return fetch(url)
        .then((res) => res.json())
}

// -----====== Formate CURRENT Weather ======-----
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0]
    return {
        lat, lon, temp, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed
    }
}

// -----====== Formate FORCAST Weather ======-----
const formatForcastWeather = (data) =>{
    let {timezone, daily, hourly} = data

    // -----====== Daily Weather ======-----
    daily = daily.slice(1,7).map(d =>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon:d.weather[0].icon
        }
    })

    // -----====== Hourly Weather ======-----
    hourly = hourly.slice(1,7).map(d =>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'h a'),
            temp: d.temp,
            icon:d.weather[0].icon
        }
    })

    return {timezone, daily, hourly}
}

// -----======= Date Formater ========--------
export const formatToDate = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy"
) =>DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

// -----======= Local Time Formater ========--------
export const formatToLocalTime = (
    secs,
    zone,
    format = "hh:mm a"
) =>DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

// -----======= Icon Formater ========--------
export const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`
export const getFormattedWeatherData = async (searchParams) => {
    // -----======= CURRENT FORMATTED ========--------
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

    const {lat,lon} = formattedCurrentWeather;
    // -----======= FORCAST FORMATTED ========--------
    const formattedForcastWeather = await getWeatherData('onecall',{
        lat,lon, exclude:'current,minutely,alerts',units:searchParams.units
    }).then(formatForcastWeather)

    return {...formattedCurrentWeather,...formattedForcastWeather}
}