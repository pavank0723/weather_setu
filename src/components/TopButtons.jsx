import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id: 1,
            title: 'Varanasi'
        },
        {
            id: 2,
            title: 'Ayodhya'
        },
        {
            id: 3,
            title: 'Ujjain'
        },
        {
            id: 4,
            title: 'Delhi'
        },
        {
            id: 5,
            title: 'New York'
        }
    ]
    return (
        <div className='flex items-center justify-between my-4'>
            {cities.map((city) => (
                <button key={city.id} className="text-white font-medium text-lg" 
                onClick={() => setQuery({q:city.title})}>
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons