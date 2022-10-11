import React from 'react'
import { formatToDate, formatToLocalTime } from '../services/Context';

function TimeAndLocation({weather:{dt,timezone,name,country}}) {
    return (
        <div>
            <div className="flex items-center justify-between my-6">
                <p className="text-white font-extralight text-xl">
                    {formatToDate(dt,timezone)}
                </p>
                <p className="text-white font-medium text-xl">
                    |
                </p>
                <p className="text-white font-extralight text-xl">
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