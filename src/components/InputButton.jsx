import React, { useState } from 'react'
import { UilSearch, UilUserLocation } from '@iconscout/react-unicons'

function InputButton({ setQuery }) {
    const [city, setCity] = useState("")

    const handleSearchCity = () => {
        if (city !== '') setQuery({ q: city })

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (city !== '') setQuery({ q: city })
        }
    }


    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon
                })
            })
        }
    }

    return (
        <div className="
        flex flex-row justify-content my-4
        sm:my-6
        md:my-6
        lg:my-6
        xl:my-6
        2xl:my-6
        ">
            <div className="flex flex-row w-full items-center justify-center space-x-4">
                <input type="text" className="focus:outline-none rounded-sm p-2 w-full shadow-xl capitalize" placeholder="Search location..."
                    value={city}
                    onKeyPress={(e) => handleKeyPress(e)}
                    onChange={(e) => setCity(e.currentTarget.value)}
                />
                <UilSearch size={25} className="text-white  transition ease-out hover:scale-125"
                    onClick={handleSearchCity}

                />
                <UilUserLocation size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 "
                    onClick={handleCurrentLocation} />
            </div>

        </div>)
}

export default InputButton