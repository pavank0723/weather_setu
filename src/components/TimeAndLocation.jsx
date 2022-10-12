import React from 'react'
import { formatToDate, formatToLocalTime } from '../services/Context';

function TimeAndLocation({weather:{dt,timezone,name,country}}) {
    return (
        <div>
            <div className="
            flex items-center justify-between my-2
            sm:my-6
            md:my-6
            lg:my-6
            xl:my-6
            2xl:my-6
            ">
                <p className="
                text-white font-extralight text-sm
                sm:text-white sm:font-extralight sm:text-xl
                md:text-white md:font-extralight md:text-xl
                lg:text-white lg:font-extralight lg:text-xl
                xl:text-white xl:font-extralight xl:text-xl
                2xl:text-white 2xl:font-extralight 2xl:text-xl
                ">
                    {formatToDate(dt,timezone)}
                </p>
                <p className="text-white font-medium text-xl">
                    |
                </p>
                <p className="
                text-white font-extralight text-sm
                sm:text-white sm:font-extralight sm:text-xl
                md:text-white md:font-extralight md:text-xl
                lg:text-white lg:font-extralight lg:text-xl
                xl:text-white xl:font-extralight xl:text-xl
                2xl:text-white 2xl:font-extralight 2xl:text-xl
                ">
                    Local time: {formatToLocalTime(dt,timezone)}
                </p>
            </div>
            <div className="flex items-center justify-center my-1">
                <p className="text-white text-2xl font-medium">
                   {name}, {country}
                </p>
            </div>
        </div>
    );
}

export default TimeAndLocation