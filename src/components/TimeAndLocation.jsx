import React from 'react'

function TimeAndLocation() {
    return (
        <div>
            <div className="flex items-center justify-between my-6">
                <p className="text-white font-extralight text-xl">
                    Monday, 10 October 2022
                </p>
                <p className="text-white font-medium text-xl">
                    |
                </p>
                <p className="text-white font-extralight text-xl">
                    Local time: 16:30 PM
                </p>
            </div>
            <div className="flex items-center justify-center my-1">
                <p className="text-white text-2xl font-medium">
                    Mumbai, IN
                </p>
            </div>
        </div>
    );
}

export default TimeAndLocation