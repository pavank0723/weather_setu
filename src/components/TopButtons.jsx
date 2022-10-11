import React from 'react'

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'Varanshi'
        },
        {
            id: 2,
            title: 'Kedarnath'
        },
        {
            id: 3,
            title: 'Ujjain'
        },
        {
            id: 4,
            title: 'Ayodhya'
        },
        {
            id: 5,
            title: 'Delhi'
        }
    ]
    return (
        <div className='flex items-center justify-between my-4'>
            {cities.map((city) => (
                <button key={city.id} className="text-white font-medium text-lg">
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons