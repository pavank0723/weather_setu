import React from 'react'
import { UilSearch, UilUserLocation } from '@iconscout/react-unicons'

function InputButton() {
    return (
        <div className="flex flex-row justify-content my-5">
            <div className="flex flex-row w-full items-center justify-center space-x-4">
                <input type="text" className="focus:outline-none rounded-sm p-2 w-full shadow-xl capitalize" placeholder="Search location..." />
                <UilSearch size={25} className="text-white  transition ease-out hover:scale-125 " />
                <UilUserLocation size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 " />
            </div>

        </div>)
}

export default InputButton