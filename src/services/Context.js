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

    const { main: details, icon,id } = weather[0]
    return {
        lat, lon, temp, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon,id, speed
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
            id:d.id,
            icon:d.weather[0].icon
        }
    })

    // -----====== Hourly Weather ======-----
    hourly = hourly.slice(1,7).map(d =>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'h a'),
            temp: d.temp,
            id:d.id,
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

//-----===== Get Icon with code =====--------
export const WeatherIcons = (code) =>{
    switch(code){
        case "01d":
            return require("../assets/sun_113.png")
            break
        case "01n":
            return require("../assets/moon_113.png")
            break
        case "02d":
            return require("../assets/sun_116.png")
            break
        case "02n":
            return require("../assets/moon_116.png")
            break
        case "03d":
            return require("../assets/cloud_119.png")
            break
        case "03n":
            return require("../assets/cloud_119.png")
            break
        case "04d":
            return require("../assets/cloud_122.png")
            break
        case "04n":
            return require("../assets/cloud_122.png")
            break
        case "09d":
            return require("../assets/cloud_302.png")
            break
        case "09n":
            return require("../assets/cloud_302.png")
            break
        case "10d":
            return require("../assets/sun_305_356.png")
            break
        case "10n":
            return require("../assets/moon_305_356.png")
            break
        case "11d":
            return require("../assets/cloud_389.png")
            break
        case "11n":
            return require("../assets/cloud_389.png")
            break
        case "13d":
            return require("../assets/cloud_332.png")
            break
        case "13n":
            return require("../assets/cloud_332.png")
            break
        case "50d":
            return require("../assets/cloud_143.png")
            break
        case "50n":
            return require("../assets/cloud_143.png")
            break
        
    }
}

// -----======= Icon Formater ========--------
// export const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`
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